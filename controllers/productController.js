//import the model to create new products
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
    res.status(500).json({
        status: "error",
        message: "undefined route"
    });
}

exports.getSingleProduct = (req, res) => {
    res.send(req.params.id);
}

exports.getEditProductForm = (req, res) => {
    res.send("<h1> edit exisiting product </h1> <form> </form>");
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