// DEPENDENCIES
const express = require("express")

// CONFIGURATION
const app = express()

// MIDDLEWARE
app.use(express.json())

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to AnJu's Hotel App")
})

const hotelsController = require("./controllers/hotelController.js")
app.use("/hotels", hotelsController)

// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("Page not found!")
})

// EXPORT
module.exports = app;