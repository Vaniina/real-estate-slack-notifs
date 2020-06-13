const fetch = require("node-fetch");

module.exports = async (options) => {
  const fetchResult = await fetch(
    `https://www.bienici.com/realEstateAds.json?filters=%7B%22size%22%3A24%2C%22from%22%3A0%2C%22filterType%22%3A%22rent%22%2C%22propertyType%22%3A%5B%22house%22%2C%22flat%22%5D%2C%22maxPrice%22%3A${options.price}%2C%22minRooms%22%3A3%2C%22minArea%22%3A48%2C%22page%22%3A1%2C%22resultsPerPage%22%3A24%2C%22maxAuthorizedResults%22%3A2400%2C%22sortBy%22%3A%22publicationDate%22%2C%22sortOrder%22%3A%22desc%22%2C%22onTheMarket%22%3A%5Btrue%5D%2C%22showAllModels%22%3Afalse%2C%22zoneIdsByTypes%22%3A%7B%22zoneIds%22%3A%5B%22-86999%22%2C%22-86985%22%2C%22-91768%22%2C%22-91641%22%5D%7D%7D&extensionType=extendedIfNoResult&leadingCount=2&access_token=vGDDowD323jMSY0%2BLyOyWNftsK733HNp35R7pPvB4%2BY%3D%3A5edf8bd4bade2500ae8c167d&id=5edf8bd4bade2500ae8c167d`,
    {
      method: "get",
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZGY4YmQ0YmFkZTI1MDBhZThjMTY3ZCIsImlzUmVnaXN0ZXJlZCI6ZmFsc2UsImlhdCI6MTU5MTcwODYyOH0.HlT8Q0-Q9Ylr8BA42HTO_eWJIdu4p1eUtSct-TqF3fE",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36",
        referer: `https://www.bienici.com/recherche/location/clichy-92110,levallois-perret-92300,courbevoie-92400,asnieres-sur-seine-92600/3-pieces-et-plus?prix-max=${options.price}&surface-min=48&tri=publication-desc`,
      },
    }
  );

  const json = await fetchResult.json();

  return json.realEstateAds.map((appartment) => ({
    id: `BienIci-${appartment.id}`,
    city: appartment.city,
    rooms: `${appartment.roomsQuantity} p`,
    bedrooms: `${
      appartment.bedroomsQuantity || appartment.roomsQuantity - 1
    } ch`,
    space: `${appartment.surfaceArea} m2`,
    images: appartment.photos
      .map((photo) => photo.url_photo || photo.url)
      .filter((photo) => photo),
    price: `${appartment.price} €`,
    description: appartment.description,
    url: `https://www.bienici.com/annonce/location/${appartment.city.toLowerCase()}/appartement/${
      appartment.roomsQuantity
    }pieces/${appartment.id}`,
  }));
};
