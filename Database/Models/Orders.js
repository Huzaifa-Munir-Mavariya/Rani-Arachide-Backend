const database = require("../database");
const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    name:String,
    email:String,
    address:String,
    whatsappNo:String,
    article:String,
    pc:String,
    homedelivery:String,
    checked:{
        type:String,
        default:false
    }
})

const Order = mongoose.model("Nut_Order", Schema);

module.exports = Order;