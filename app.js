//require express
const express = require("express");

//store express methods in app variable
const app = express();

//use stylesheet
app.use(express.static(`${__dirname}/public`));



//run view engine
app.set("view engine", "ejs");

//create route handlers
app.get("/products/", (req, res) => {
    //eventually will send all html for main page
    res.render("index");
});

app.get("/products/new", (req, res) => {
    //eventually will send an html form for creating a new product
    res.send("<h1> Create a new product </h1> <form> </form>");
});

app.post("/products"), (req, res) => {
    res.status(200);
}

app.get("/products/:id", (req, res) => {
    //eventually will send an individual page of products
    res.send(req.params.id);
});

app.get("/products/:id/edit", (req, res) => {
    //eventually will send an html form to edit a specific product
    res.send("<h1> Create a new product </h1> <form> </form>");
});

app.delete("/products/:id", (req, res) => {
    //eventually will delete an individual product
    res.send("<h1>{req.params.id has been deleted}</h1>");
    res.status(200);
});

app.put("/products/:id", (req, res) => {
    //eventually will update an individual product
    res.status(200);
});



//create a port 
const port = 3000;
//listen to request/response cycle
app.listen(port, (req, res) => {
    console.log(`server started on port ${port}`)
});