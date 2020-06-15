const fetch = require("node-fetch");

module.exports = async (options) => {
  const fetchResult = await fetch(
    `https://www.stephaneplazaimmobilier.com/search/rent?target=rent&type[]=1&room_min[]=${options.minRooms}&location[]=92044&location[]=92024&location[]=92026&location[]=92004&price_max=${options.maxPrice}&surface_min=${options.minSpace}&sort=`,
    {
      method: "get",
      headers: {
        referer: `https://www.stephaneplazaimmobilier.com/immobilier-acheter?target=rent&type=1&room_min=${options.minRooms}&location=92044,92024,92026,92004&price_max=${options.maxPrice}&surface_min=${options.minSpace}&now=1&page=3`,
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36",
      },
    }
  );

  const json = await fetchResult.json();

  return json.results.map((appartment) => ({
    id: `StéphanePlaza-${appartment.id}`,
    provider: "stéphaneplaza",
    maxPrice: appartment.price,
    description: appartment.description,
    city: appartment.properties.city,
    minRooms: appartment.properties.room,
    minBedrooms: appartment.properties.bedroom,
    minSpace: appartment.properties.surface,
    images: appartment.thumbnails,
    url: `https://www.stephaneplazaimmobilier.com/immobilier-acheter/${appartment.id}/${appartment.slug}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuZXh0IjoiMSIsIm9sZF9pbmRleF9hZ2VuY2llcyI6IjAiLCJ0YXJnZXQiOiJyZW50IiwidHlwZSI6WyIxIl0sInJvb21fbWluIjpbIjMiXSwibG9jYXRpb24iOlsiOTIwNDQiLCI5MjAyNCIsIjkyMDI2IiwiOTIwMDQiXSwicHJpY2VfbWF4IjoiMTgwMCIsInN1cmZhY2VfbWluIjoiNDgiLCJzb3J0IjpudWxsLCJwYWdlIjoxfQ.U58WbgDR-AjOhAyizmyxoqYfRl5p-OkMVTkHHKuGsQg&index=0&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0YXJnZXQiOiJyZW50IiwidHlwZSI6WyIxIl0sInJvb21fbWluIjpbIjMiXSwibG9jYXRpb24iOlsiOTIwNDQiLCI5MjAyNCIsIjkyMDI2IiwiOTIwMDQiXSwicHJpY2VfbWF4IjoiMTgwMCIsInN1cmZhY2VfbWluIjoiNDgiLCJzb3J0IjpudWxsfQ.ie28aW3BoLKyuJtdzhBDifQZwtOvzwFQ3UE5ie-bPfg&next=1&index_agencies=null&old_index_agencies=0`,
  }));
};
