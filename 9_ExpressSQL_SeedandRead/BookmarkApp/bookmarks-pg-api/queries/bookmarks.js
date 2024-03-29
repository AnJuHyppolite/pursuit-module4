const bookmarks = require("../controllers/bookmarksController");
const db = require("../db/dbConfig.js");

const getAllBookmarks = async () => {
  try {
    const allBookmarks = await db.any("SELECT * FROM bookmarks");
    return allBookmarks;
  } catch (error) {
    return error;
  }
};

// will implement on Sat: Saturday, July 10, 2021
const getBookmark = async (id) => {
  try {
    const bookmark = await db.one(`SELECT * FROM bookmarks WHERE id=$1`, id);
    // const bookmark = await db.one(`SELECT * FROM bookmarks WHERE [id]`, {id:id}); similar to the line above
    // const bookmark = await db.one(`SELECT * FROM bookmarks WHERE id=$1 AND url=$2`, id, 'google.com'); implementation of pg-promise to avoid SQL injection
    return bookmark;
  } catch (error) {
    console.log(error);
  }
};

const createBookmark = async (newBookmark) => {
  const { name, url, category, is_favorite } = newBookmark;
  try {
    const theBookmark = await db.one(
      "INSERT INTO bookmarks(name, url, category, is_favorite) VALUES($1, $2, $3, $4) RETURNING *",
      [name, url, category, is_favorite]
    );
    return theBookmark;
  } catch (error) {
    console.log(error);
  }
};

// module.exports = {
//   getAllBookmarks: getAllBookmarks, getBookmark: getBookmark
// };

module.exports = { getAllBookmarks, getBookmark, createBookmark };
