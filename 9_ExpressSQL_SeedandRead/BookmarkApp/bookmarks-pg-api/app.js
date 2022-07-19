// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const bookmarksController = require("./controllers/bookmarksController");
// const reviewsController = require("./controllers/reviewsControllers");


// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Bookmarks App");
});

// BOOKMARK ROUTE
app.use("/bookmarks", bookmarksController);

// REVIEW ROUTE
// app.use("/reviews", reviewsController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;