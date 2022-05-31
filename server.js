//import mongoose 
const mongoose = require("mongoose")

//import dotenv to connenct to our database
const dotenv = require("dotenv");

//use dotenv to connect to our config file
dotenv.config({
    path: "./config.env"
});


//import express application
const app = require("./app")

//create a variable to represent our database
const efarmDB = mongoose.connect(process.env.DATABASE.replace("<password>", process.env.PASSWORD)).then(() => {
    console.log("DATABASE IS UP AND RUNNING");
});

//create a port 
const port = 3000;
//listen to request/response cycle
app.listen(port, (req, res) => {
    console.log(`server started on port ${port}`)
});