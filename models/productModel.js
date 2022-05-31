//import mongoose in order to create a schema
const mongoose = require("mongoose")

//create a schema
const productSchema = new mongoose.Schema({
    name: { type: String, },
    description: { type: String, },
    picture: { type: String, },
    quantity: { type: Number, }
});

//create model
const Product = mongoose.model("Product", productSchema);