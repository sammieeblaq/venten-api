const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    image: String,
    color: String
});

module.exports = mongoose.model("Product", productSchema);