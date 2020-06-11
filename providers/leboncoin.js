const fetch = require("node-fetch");

module.exports = async (options) => {
  const fetchResult = await fetch("https://api.leboncoin.fr/finder/search", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      api_key: "ba0c2dad52b3ec",
      Referer: `https://www.leboncoin.fr/recherche/?category=10&locations=Asni%C3%A8res-sur-Seine_92600__48.91831_2.2855_2668,Courbevoie_92400__48.89618_2.25648_2144,Clichy_92110__48.90375_2.30497_1302,Levallois-Perret_92300__48.89355_2.28959_1450&owner_type=pro&furnished=2&real_estate_type=2&price=min-${options.price}&rooms=3-max&square=40-max`,
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36",
    },
    body: JSON.stringify({
      filters: {
        category: { id: "10" },
        enums: {
          ad_type: ["offer"],
          furnished: ["2"],
          real_estate_type: ["2"],
        },
        keywords: {},
        location: {
          locations: [
            {
              locationType: "city",
              city: "Asnières-sur-Seine",
              zipcode: "92600",
              label: "Asnières-sur-Seine (92600)",
              area: { lat: 48.91831, lng: 2.2855, default_radius: 2668 },
            },
            {
              locationType: "city",
              city: "Courbevoie",
              zipcode: "92400",
              label: "Courbevoie (92400)",
              area: { lat: 48.89618, lng: 2.25648, default_radius: 2144 },
            },
            {
              locationType: "city",
              city: "Clichy",
              zipcode: "92110",
              label: "Clichy (92110)",
              area: { lat: 48.90375, lng: 2.30497, default_radius: 1302 },
            },
            {
              locationType: "city",
              city: "Levallois-Perret",
              zipcode: "92300",
              label: "Levallois-Perret (92300)",
              area: { lat: 48.89355, lng: 2.28959, default_radius: 1450 },
            },
          ],
        },
        ranges: {
          price: { max: options.price },
          rooms: { min: 3 },
          square: { min: 40 },
        },
      },
      limit: 35,
      limit_alu: 3,
      owner_type: "all",
    }),
  });

  const json = await fetchResult.json();

  return json.ads.map((appartment) => {
    const getAttributeValue = (key) => {
      const attribute = appartment.attributes.find(
        (attribute) => attribute.key === key
      );
      return attribute ? attribute.value : null;
    };

    return {
      id: `LeBonCoin-${appartment.list_id}`,
      rooms: `${getAttributeValue("rooms")} p`,
      city: appartment.location.city,
      bedrooms: `${getAttributeValue("rooms") - 1} ch`,
      space: `${getAttributeValue("square")} m2`,
      images: appartment.images.urls_thumb || [],
      price: `${appartment.price[0]} €`,
      description: appartment.body,
      url: appartment.url,
    };
  });
};
