// config vars deconstructed
require("dotenv").config()
const {
    PORT
} = process.env

// dependencies
const cors = require("cors")
const express = require("express")
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const morgan = require("morgan")

// controllers and models

// activate express (TODO: and mongoose)
const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false })); // body parser to access req.body
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
app.use(morgan("dev"));

// custom middleware

// routes and controllers
app.get("/", async (req, res) => res.json({message: "Hello SCP++"}))

// start server
app.listen(PORT, () => console.log(`listening on port ${PORT}...`))