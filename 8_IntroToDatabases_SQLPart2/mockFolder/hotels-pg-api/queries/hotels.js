const db = require("../db/dbConfig.js");

const getAllHotels = async () => {
  try {
    const allHotels = await db.any("SELECT * FROM hotels");
    return allHotels;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllHotels: getAllHotels };
