const database = require("../database");
const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    name:String,
    price:String,
    currency:String,
    text:String,
    image:String
})

const Articles = mongoose.model("Nut_Article", Schema);

module.exports = Articles;