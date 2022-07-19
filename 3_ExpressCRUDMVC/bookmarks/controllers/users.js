const users = require("express").Router();
const usersArray = require("../models/user.js");

users.get("/", (req, res) => {
	// req.query; { bananas: 'Tim' };
	let { name, age } = req.query
  console.log(req.query)


	let filtered;
	if (name || age ) {
		name = name || ""
		filtered = usersArray.filter(user => {
			console.log(user)
			return user.name.toLowerCase() === name.toLowerCase() || user.age === parseInt(age);
		});
	}

  res.json(filtered || usersArray);
});

// INDEX FOR USERS /users/
// users.get("/", (req, res) => {
//   const { apples } = req.query
//   const queryString = apples;
//   // const queryString = req.query.apples; the same as above line when it is not destructured
//   console.log(queryString);
//   res.json(usersArray);
// });

// // INDEX FOR USERS /users/
// users.get("/", (req, res) => {
//   // req.query; { bananas: 'Tim' }; NOT SURE HOW YOU GET BANANAS AS A KEY WHEN THE QUERY IS FOR APPLE
//   const queryString = req.query.apples;

//   let filtered;
//   if (queryString) {
//     filtered = usersArray.filter((user) => {
//       return user.name === queryString;
//     });
//   }

//   res.json(filtered || usersArray);
// });

// "http://localhost:3001     /users     ?apples=Tim&bananas=somethingElse&car=bmw"
// "http://localhost:3001     /users     ?bananas=Tim" gets you the entire array of users

module.exports = users;
