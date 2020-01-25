const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    Name: String,
    Description: String,
    Price: Number,
    Category: String,
    Image: Buffer,
    Color: String
});

module.exports = mongoose.model("Product", productSchema);