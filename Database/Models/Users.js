const database = require("../database");
const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    address:String,
    whatsappNo:String
})

const User = mongoose.model("Nut_User", Schema);

module.exports = User;