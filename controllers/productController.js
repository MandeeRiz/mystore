//import the model to create new products
//const Product = require("./../models/productModel");
const Products = require("./../models/productModel");

//refactor route controllers
exports.getAllProducts = async(req, res) => {
    try {
        const item = await Products.find();
        res.render("index", { productList: item });
    } catch (error) {
        console.log("error");
    }
}

exports.getFormNewProduct = (req, res) => {
    res.render("form");
}

exports.postNewProduct = async(req, res) => {
    try {
        const newProduct = await Products.create(req.body)
        res.status(201).json({
            status: "success",
            data: {
                newProduct
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "undefined route"
        });
    }
}

exports.getSingleProduct = async(req, res) => {
    try {
        const item = await Products.findById(req.params.id);
        res.render("product", { item });
    } catch (error) {
        console.log("error");
    }
}


exports.getEditProductForm = (req, res) => {
    res.render("editform");
}

exports.deleteSingleProduct = async(req, res) => {
    try {
        console.log("hi")
        await Products.findByIdAndDelete(req.params.id)
        res.redirect("https://localhost:3000/efarm/product")
            //res.status(200).json({
            //   status: "success",
            //   message: "it worked"
            // })
    } catch (error) {
        res.status(500).json({
            status: "fail",
            data: {
                message: "error",
            },
        });
    }
}

exports.putSingleProduct = (req, res) => {
    res.status(500).json({
        status: "fail",
        data: {
            message: "undefined routes",
        },
    });
}