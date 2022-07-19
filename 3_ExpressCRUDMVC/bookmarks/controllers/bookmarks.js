//Corey called bookmarks.js

const bookmarks = require("express").Router();
const bookmarksArray = require("../models/bookmark.js");

bookmarks.get("/", (req, res) => {
  // console.log(req.query) BONUS part of lab
  res.json(bookmarksArray);
});

//CALLBACK FOR SHOW ROUTE
bookmarks.get("/:arrayIdx", (req, res) => {
  console.log("PARAMETER:", req.params);
  const { arrayIdx } = req.params;
  // console.log(req.query)
  // res.send("We're here...")
  const bookmark = bookmarksArray[arrayIdx];
  // console.log("BOOKMARK", bookmark);
  if (bookmark) {
    res.json(bookmark);
  } else {
    res.redirect("/404");
  }
});

// const path = 'http://localhost:3001      /bookmarks    ?arrayId=25'
// GET /bookmarks ----- arrayId=25
// GET /bookmarks/banana ----- arrayId=25
// bookmarks.get("/:arrayIdx", (req, res) => {
//   console.log(req.params);
//   const bookmark = bookmarksArray[req.params.arrayIdx];
//   res.json(bookmark)
// if (bookmark) {
//   res.json(bookmark);
// } else {
//   res.redirect('/404');
// }
// });

bookmarks.post("/", (req, res) => {
  console.log(req)
  console.log("BODY", req.body) //body we want to save
  // res.send("POSTING")
  const { body } = req
  bookmarksArray.push(body);
  const newIdx = bookmarksArray.length - 1;
  // res.redirect("/");
  res.json(bookmarksArray[newIdx]);
  // res.json(bookmarksArray);
})

//PUT - update action - /bookmarks/:id - put has a body
// bookmarks.put("/:arrayIdx", (req, res) => {
//   const { arrayIdx } = req.params;
//   const { body } = req
//   bookmarksArray[arrayIdx] = body
//   res.json(bookmarksArray[arrayIdx])
// })

  
// bookmarks.delete("/:arrayIdx", (req, res) => {
// const { arrayIdx } = req.params
// const deletedBookmark = bookmarksArray.splice(arrayIdx, 1)
// res.json(deletedBookmark[0])
// })

module.exports = bookmarks;
