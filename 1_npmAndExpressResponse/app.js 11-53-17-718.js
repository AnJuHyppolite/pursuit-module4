//Create a route that’s called terminator and have the response be your favorite catch phrase from the movie or
//something you wish was in the movie.

const express = require("express");
// console.log(express)
const app = express();
// console.log(app)
const PORT = 4001;

app.get("/", (request, response) => {
  response.send("I really like express.");
});

app.get("/movies", (req, res) => {
  res.send("All movies sent");
});

app.get("/terminator", (req, res) => {
  res.send("I'll be back!");
});

app.get("/html", (req, res) => {
    res.send("<h1>Sending back HTML!</h1>");
  });

app.listen(PORT, () => {
  console.log("Listening on PORT: ", PORT);
});
