const fetch = require("node-fetch");

module.exports = async (options) => {
  const fetchResult = await fetch(
    `https://www.laforet.com/api/immo/properties?page=1&perPage=40&exclude=17978348%2C17975063%2C17963613%2C17930926%2C4372555&cities=92044%2C92024%2C92004%2C92026&types=apartment&max=${options.maxPrice}&rooms=${options.minRooms}&surface=${options.minSpace}&transaction=rent`,
    {
      method: "get",
      headers: {
        referer: `https://www.laforet.com/louer/rechercher?filter%5Bcities%5D=92044%2C92024%2C92004%2C92026&filter%5Btypes%5D=apartment&filter%5Bmax%5D=${options.maxPrice}`,
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36",
      },
    }
  );

  const json = await fetchResult.json();

  return json.data.map((appartment) => ({
    id: `LaForêt-${appartment.immo_id}`,
    provider: "laforêt",
    maxPrice: `${appartment.price} €`,
    minRooms: `${appartment.rooms} p`,
    minBedrooms: `${appartment.bedrooms} ch`,
    minSpace: `${appartment.surface} m2`,
    city: appartment.address.city,
    description: appartment.description,
    images: appartment.photos,
    url: `https://www.laforet.com/agence-immobiliere/${appartment.agency.slug}/louer/${appartment.address.city_slug}/${appartment.slug}`,
  }));
};
