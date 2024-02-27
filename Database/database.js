const mongoose = require("mongoose");
const URI = "mongodb+srv://Huzaifa:Huzaifa@mydatabase.vad6c3b.mongodb.net";

const connect = mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to the database"))
.catch((e) => console.log("Connection Failed"))

module.exports = connect;