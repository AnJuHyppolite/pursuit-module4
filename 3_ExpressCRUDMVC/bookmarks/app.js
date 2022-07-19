// DEPENDENCIES
const express = require("express");
const bookmarksController = require("./controllers/bookmarks.js");
const usersController = require("./controllers/users.js");

// CONFIGURATION
const app = express();

// const appJson = express.json();
// console.log(appJson.toString())
// app.use(appJson)

app.use((req, res, next) => { //middleware requires a next() in order to know where to do next
  // console.log("This should hit with every req")
  next()
}) 

app.use(express.json()) //built-in middleware that comes with express & attaches body object to request

// ROUTES
app.use("/bookmarks", bookmarksController);
app.use("/users", usersController);


// ROOT
app.get("/", (req, res) => {
  res.send("Welcome to Bookmarks App");
});


// 404 CATCH ALL
app.get("*", (req, res) => {
  res.status(404).send("Page Not Found!!!");
});

// EXPORT
module.exports = app;
