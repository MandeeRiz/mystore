//import mongoose in order to create a schema
const mongoose = require("mongoose")

//create a schema
const productSchema = new mongoose.Schema({
    name: { type: String, },
    description: { type: String, },
    picture: { type: String, },
    quantity: { type: Number, },
    price: { type: Number, },
});

//create model
const Product = mongoose.model("Product", productSchema);

//export our product model to other parts of our app
module.exports = Product;