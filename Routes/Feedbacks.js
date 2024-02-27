const Feedback = require("../Database/Models/Feedbacks");
const router = require("express").Router();

router.post("/addfeedback", async (req,res) => {
    const {sender, senderName, feedback} = req.body;

    const data = new Feedback({
        sender, senderName, feedback
    })

    const savedData = await data.save();
    
    res.json(savedData);
})

router.get("/getfeedbacks", async (req,res) => {
    const data = await Feedback.find();

    res.json(data);
})

module.exports = router;