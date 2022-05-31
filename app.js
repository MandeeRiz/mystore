//require express
const express = require("express");
const res = require("express/lib/response");

//import product controllers
const productController = require("./controllers/productController");

//import router from productrouter
const productRouter = require("./routes/productRoutes");

//store express methods in app variable
const app = express();

// require path for images and css to be used with .ejs files
const path = require("path");


//middleware
//use stylesheet and images 
app.use(express.static(path.join(__dirname, "public")));

//run view engine
app.set("view engine", "ejs");

//puts efarm/products in front of all route handlers
app.use("/efarm/products", productRouter);

module.exports = app;