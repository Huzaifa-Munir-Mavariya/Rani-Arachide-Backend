const database = require("../database");
const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    sender:String,
    feedback:String,
    senderName:String
})

const Feedback = mongoose.model("Nut_Feedback", Schema);

module.exports = Feedback;