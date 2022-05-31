//import express
const express = require("express");

//import our learner controller
const productController = require("./../controllers/productController")

//create an express router
const router = express.Router();

//refectored route handlers
//Shows all products (index.ejs)
//post a new product to API
router.route("/").get(productController.getAllProducts)
    .post(productController.postNewProduct);

//sends form to create a new product
router.route("/new").get(productController.getFormNewProduct)

//get a single product
//delete an individual product
//updates an individual product
router.route("/:id").get(productController.getSingleProduct)
    .delete(productController.deleteSingleProduct)
    .put(productController.putSingleProduct);

//form to edit a specific product
router.route("/:id/edit").get(productController.getEditProductForm);

module.exports = router;