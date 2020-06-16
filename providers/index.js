module.exports = [
  require("./seloger"),
  require("./leboncoin"),
  require("./bienici"),
  require("./nexity"),
  require("./laforêt"),
  require("./stéphaneplaza"),
].map((provider) => {
  return async (options) => {
    try {
      // Handle errors
      return await provider(options);
    } catch (error) {
      console.error(error);
      return [];
    }
  };
});
