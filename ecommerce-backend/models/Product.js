// backend/models/Product.js

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    // Add other fields as needed
});

module.exports = mongoose.model("Product", productSchema);
