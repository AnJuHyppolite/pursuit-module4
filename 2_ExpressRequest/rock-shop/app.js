//Sunday, June 6, 2021
const express = require("express");
const app = express();
const rocks = require("./models/rock.js");

app.get("/", (req, res) => {
  res.send("Welcome to the Rock Shop");
});

app.get("/rocks", (req, res) => {
  res.json(rocks);
});

// app.get("/rocks/0", (req, res) => {
//     res.json(rocks[0])
// })

// app.get("/rocks/1", (req, res) => {
//     res.json(rocks[1])
// })

// app.get("/rocks/2", (req, res) => {
//     res.json(rocks[2])
// })

app.get("/rocks/awesome", (req, res) => {
  res.send("Yes rocks are awesome!");
});

app.get("/rocks:id", (req, res) => {
  const { id } = req.params;
  if (rocks[id]) {
    res.json(rocks[id]);
  } else {
    res.status(404).send("Rock NOT FOUND");
  }
});

// Example of sending to responses
// app.get("/rocks:id", (req, res) => {
//   const { id } = req.params;
//   if (rocks[id]) {
//     res.json({
//       rock: rocks[id],
//       message: "Rock at index " + id,
//     });
//   } else {
//     res.status(404).send("Rock NOT FOUND");
//   }
// });

// app.get("/calculator/:operator", (req, res) => {
//   console.log(req.params);
//   res.send("Sent request");
// });

// COULD WRITE
// app.get("/calculator/:operator/:num1/:num2", (req, res) => {
//     console.log(req.params)
//     res.send("Sent request")
// })

// app.get("/calculator/:operator?num1=4&num2=5", (req, res) => {
//     console.log(req.params)
//     res.send("Sent request")
// })
//write /calculator/:operator?num1=4&num2=5" in browser and...
// app.get("/calculator/:operator", (req, res) => {
//   // console.log(req.query)
//   const { num1, num2 } = req.query;
//   const { operator } = req.params;
//   if (operator === "add") {
//     // res.send(num1 + num2); strings so will concatenate
//     //  res.send(Number(num1) + Number(num2))
//     res.json(Number(num1) + Number(num2));
//     res.send("sum of nums is: " + (Number(num1) + Number(num2)));
//   }
//   res.send("Sent request");
// });

//CHALLENGE: Can you figure out how to add the functionality of subtract, multiply, and divide?
// Demi and Auredy
app.get("/calculator/:operator", (req, res) => {
  // console.log(req.query)
  const { num1, num2 } = req.query;
  const { operator } = req.params;
  if (operator === "add") {
    res.json(Number(num1) + Number(num2));
  } else if (operator === "subtract") {
      res.json(Number(num2) - Number(num1));
  } else if (operator === "multiply") {
    res.json(Number(num1) * Number(num2));
  } else if (operator === "divide") {
    res.json(Number(num2) / Number(num1));
  }
  res.send("Sent request");
});

//Doesn't work because of parameter id we have after rocks (see above)
//Fix: order by specificity. Move above id parameter.
// app.get("/rocks/awesome", (req, res) => {
//     res.send("Yes rocks are awesome!")
// })
app.get("/:firstName/:lastName", (req, res) => {
  // console.log(req.params);
  const { firstName, lastName } = req.params;
  res.send(`Greetings ${firstName} ${lastName} and welcome!`);
});
//localhost: 3000/c/l
//consolelog { firstName: 'c', lastName: 'l' }



module.exports = app;
