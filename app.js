const express = require("express");
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const port = process.env.PORT || 3000;

// Connect to the database
mongoose.connect("mongodb://localhost/venten", { useNewUrlParser: true, useUnifiedTopology: true });


app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cors());

// Routes


app.listen(port, () => console.log(`server running on port ${port}`));