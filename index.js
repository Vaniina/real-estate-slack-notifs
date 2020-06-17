const realEstateAggregator = require("@vaniina/real-estate-aggregator");
const fs = require("fs");
const { WebClient } = require("@slack/web-api");
require("dotenv").config();

const cache = JSON.parse(fs.readFileSync("./cache.json"));
const web = new WebClient(process.env.SLACK_TOKEN);

async function loadResults() {
  // Execute providers
  const results = await realEstateAggregator({
    maxPrice: 1200,
    minRooms: 3,
    minBedrooms: 2,
    minSpace: 48,
  });

  // Exclude already sent results
  const appartments = results.filter((appartment) => {
    if (cache.includes(appartment.id)) {
      return false;
    } else {
      return true;
    }
  });

  if (appartments.length === 0) {
    console.log("No updates");
    return;
  }

  console.log(`${appartments.length} nouveaux résultats !`);

  const blocks = [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `${appartments.length} nouveaux résultats`,
      },
    },
  ];

  appartments.forEach((appartment) => {
    cache.push(appartment.id);

    // Build slack api blocks
    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `<${appartment.url}|${appartment.city}> *${appartment.maxPrice} €*\n ${appartment.description}\n\n ${appartment.minRooms} p • ${appartment.minBedrooms} ch • ${appartment.minSpace} m2`,
      },
      accessory: appartment.images.length
        ? {
            type: "image",
            image_url: appartment.images[0],
            alt_text: "image",
          }
        : undefined,
    });
  });

  // Save cache
  fs.writeFileSync("./cache.json", JSON.stringify(cache));

  // Notify slack channel
  await web.chat.postMessage({
    text: `${appartments.length} nouveaux résultats`,
    channel: process.env.SLACK_CHANNEL,
    blocks,
  });
}

// Execute workers
loadResults();
setInterval(loadResults, 60 * 1000);
