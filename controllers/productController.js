//import the model to create new products
const Product = require("./../models/productModel");
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

exports.getSingleProduct = (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        res.send(foundProduct);
    });
}

exports.getEditProductForm = (req, res) => {
    res.render("editform");
}

exports.deleteSingleProduct = (req, res) => {
    res.status(500).json({
        status: "fail",
        data: {
            message: "undefined routes",
        },
    });
}

exports.putSingleProduct = (req, res) => {
    res.status(500).json({
        status: "fail",
        data: {
            message: "undefined routes",
        },
    });
};