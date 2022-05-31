//refactor route controllers
exports.getAllProducts = (req, res) => {
    res.render("index");
}

exports.getFormNewProduct = (req, res) => {
    res.send("<h1> Create a new product </h1> <form> </form>");
}

exports.postNewProduct = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "undefined route"
    });

    //("You created a new product")
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