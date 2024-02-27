const User = require("../../Database/Models/Users");

const userExist = async (req, res, next) => {
    const {name, email, password, address, whatsappNo} = req.body;

    const data = await User.findOne({email});

    if(data != null){
        res.json("That User Exist");
    }else{
        next();
    }
}

module.exports = userExist;