const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");

//All the Route Files
const Users = require("./Routes/Users")
const Orders = require("./Routes/Orders");
const Feedbacks = require("./Routes/Feedbacks");
const Articles = require('./Routes/Articles');

//All the Middlewares

app.use(cors());
app.use(express.json());

//All the Routes
app.use("/user",Users);
app.use("/order",Orders);
app.use("/feedback", Feedbacks);
app.use("/article", Articles);

app.listen(port, () => {
    console.log("listening to port no "+port);
})