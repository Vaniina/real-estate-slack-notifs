const fetch = require("node-fetch");

fetch(
  "https://www.seloger.com/list/api/externaldata?from=0&size=25&isSeo=false",
  {
    method: "post",
    body: JSON.stringify({
      enterprise: false,
      projects: [1],
      types: [1],
      places: [
        { label: "Levallois-Perret", cities: [920044] },
        { label: "Clichy (92110)", cities: [920024] },
        { label: "Courbevoie (92400)", cities: [920026] },
      ],
      surface: { min: 50, max: null },
      rooms: [3],
      bedrooms: [2],
      sort: [5],
    }),
    headers: {
      "content-type": "application/json",
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36",
      referer:
        "https://www.seloger.com/list.htm?projects=1&types=1&places=[{ci:920044}|{ci:920024}|{ci:920026}]&surface=50/NaN&bedrooms=2&rooms=3&sort=d_dt_crea&enterprise=0&qsVersion=1.0",
    },
  }
)
  .then((res) => res.json())
  .then((json) => {
    const results = json.classifiedsData.classifieds.map(function (appartment) {
      return {
        city: appartment.cityLabel,
        rooms: appartment.tags[0],
        bedrooms: appartment.tags[1],
        space: appartment.tags[2],
        images: appartment.photos,
        price: appartment.pricing.price,
        description: appartment.description,
        url: appartment.classifiedURL,
      };
    });

    console.log(json.classifiedsData.classifieds[0]);
    console.log(results[0]);
  });
/*
const { WebClient } = require("@slack/web-api");

// An access token (from your Slack app or custom integration - xoxp, xoxb)
const token = "xoxb-1151559027299-1151599317699-UEf6orWo6ayHaJnd9O22iDm9";
const web = new WebClient(token);

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const conversationId = "C01555H1K5E";

(async () => {
  // See: https://api.slack.com/methods/chat.postMessage
  const res = await web.chat.postMessage({
    channel: conversationId,
    text: "Notification de logements !",
  });

  // `res` contains information about the posted message
  console.log("Message sent: ", res.ts);
})();

/*
var messages = {
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "2 nouveaux résultats",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text:
          "<https://example.com|Courbevoie, Bécon> • *650 €*\n Dans une résidence sécurisée, nous vous proposons à la location un appartement de type 3 pièces proche de la gare de Bécon le...\n\n*3 p • 2 ch  • 48.18 m2*",
      },
      accessory: {
        type: "image",
        image_url:
          "https://v.seloger.com/s/width/400/visuels/1/1/a/i/11aiqbxceya1vkhigu3uss1zyburu2tn7609npogw.jpg",
        alt_text: "image",
      },
    },
    {
      type: "divider",
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text:
          "<https://example.com|Courbevoie, Bécon> • *650 €*\n Dans une résidence sécurisée, nous vous proposons à la location un appartement de type 3 pièces proche de la gare de Bécon le...\n\n*3 p • 2 ch  • 48.18 m2*",
      },
      accessory: {
        type: "image",
        image_url:
          "https://v.seloger.com/s/width/400/visuels/1/1/a/i/11aiqbxceya1vkhigu3uss1zyburu2tn7609npogw.jpg",
        alt_text: "image",
      },
    },
  ],
};
*/
