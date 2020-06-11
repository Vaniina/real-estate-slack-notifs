const fetch = require("node-fetch");

module.exports = async (options) => {
  const fetchResult = await fetch(
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
        price: { min: null, max: options.price },
        rooms: [3],
        bedrooms: [2],
        sort: [5],
      }),
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36",
        referer:
          "https://www.seloger.com/list.htm?projects=1&types=1&places=[{ci:920044}|{ci:920024}|{ci:920026}]&surface=50/NaN&bedrooms=2&rooms=3&sort=d_dt_crea&enterprise=0&qsVersion=1.0",
      },
    }
  );

  const json = await fetchResult.json();

  return json.classifiedsData.classifieds.map((appartment) => ({
    id: `SeLoger-${appartment.id}`,
    city: appartment.cityLabel,
    rooms: appartment.tags[0],
    bedrooms: appartment.tags[1],
    space: appartment.tags[2],
    images: appartment.photos,
    price: appartment.pricing.price,
    description: appartment.description,
    url: appartment.classifiedURL,
  }));
};
