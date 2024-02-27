const router = require("express").Router();
const Order = require("../Database/Models/Orders");

//POST: Add Orders
router.post("/addorder", async (req, res) => {
    const { name, email, address, whatsappNo, article, pc, homedelivery } = req.body;

    const data = new Order({
        name, email, address, whatsappNo, article, pc, homedelivery
    })

    const savedData = await data.save();
    res.json(savedData);
})

router.get("/getOrders", async (req, res) => {
    const data = await Order.find();

    if(data){
        res.json(data);
    }
});

router.put("/orderChecked", async (req,res) => {
    const {id} = req.body;

    const data = await Order.findByIdAndUpdate(id, {$set: {checked:true}});
    res.json(data);
});

module.exports = router;