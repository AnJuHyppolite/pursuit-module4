const express = require("express");
const hotels = express.Router();
const { getAllHotels } = require("../queries/hotels");

//INDEX
hotels.get("/", async (req, res) => {
  const allHotels = await getAllHotels();
  console.log("RESPONSE", hotels)
  res.json(allHotels);
});

module.exports = hotels;
