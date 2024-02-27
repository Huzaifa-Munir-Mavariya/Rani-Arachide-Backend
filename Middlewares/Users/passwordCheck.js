const User = require("../../Database/Models/Users");

const passwordCheck = async (req, res, next) => {
    const {email, password} = req.body;

    const data = await User.findOne({email});

    if(data == null || data.password != password){
        res.json("Invalid Credentials")
    }else{
        next();
    }
    
}

module.exports = passwordCheck;