const router = require("express").Router();

//Middlewares
const UserExist = require("../Middlewares/Users/UserExist");
const CredentialCheck = require("../Middlewares/Users/passwordCheck");

//Database Models
const User = require("../Database/Models/Users");

//Creating Account
router.post("/createaccount", UserExist, async (req,res) => {
    const {name, email, password, whatsappNo, address} = req.body;

    const data = new User({
        name, email, password, whatsappNo, address
    })

    const savedData = await data.save();
    res.json(savedData);
})

//Login Users
router.post("/login", CredentialCheck, async (req, res) => {
    const {email} = req.body;

    const data = await User.findOne({email});

    res.json(data);
})

router.put("/updateAddress", async (req,res) => {
    const {email, address} = req.body;

    const data = await User.findOneAndUpdate({email}, {$set: {address}}, {new:true});

    if(data){
        res.json(data);
    }
    
    
})

module.exports = router;