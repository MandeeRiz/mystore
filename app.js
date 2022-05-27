//require express
const express = require("express");
const res = require("express/lib/response");

//store express methods in app variable
const app = express();

// require path for images and css to be used with .ejs files
const path = require("path");


//middleware
//use stylesheet and images 
app.use(express.static(path.join(__dirname, "public")));

//run view engine
app.set("view engine", "ejs");

//refactor route controllers
const getAllProducts = (req, res) => {
    res.render("index");
}

const getFormNewProduct = (req, res) => {
    res.send("<h1> Create a new product </h1> <form> </form>");
}

const postNewProduct = (req, res) => {
    res.status(200);
    res.render("You created a new product")
}

const getSingleProduct = (req, res) => {
    res.send(req.params.id);
}

const getEditProductForm = (req, res) => {
    res.send("<h1> edit exisiting product </h1> <form> </form>");
}

const deleteSingleProduct = (req, res) => {
    res.send("<h1>{req.params.id} has been deleted</h1>");
    res.status(200);
}

const putSingleProduct = () => {
    res.status(500).json({
        status: "fail",
        data: {
            message: "undefined routes",
        },
    });
};


//create an express router
const productRouter = express.Router();

//puts efarm/products in front of all route handlers
app.use("efarm/products", productRouter);

//refectored route handlers
//Shows all products (index.ejs)
//post a new product to API
productRouter.route("/").get(getAllProducts)
    .post(postNewProduct);

//sends form to create a new product
productRouter.route("/new").get(getFormNewProduct)


//get a single product
//delete an individual product
//updates an individual product
productRouter.route("/:id").get(getSingleProduct)
    .delete(deleteSingleProduct)
    .put(putSingleProduct);

//form to edit a specific product
productRouter.route("/:id/edit").get(getEditProductForm);





//create a port 
const port = 3000;
//listen to request/response cycle
app.listen(port, (req, res) => {
    console.log(`server started on port ${port}`)
});