const router = require("express").Router();
const { response } = require("express");
const Article = require("../Database/Models/Articles");
const cloudinary = require("../Cloudinary");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    }
})

const upload = multer({
    storage:storage
})

router.post("/addarticle", async (req, res) => {
    //Articles_Info: name, price, currency, image, text
    const data = new Article(req.body);
    const savedData = await data.save();
    res.json(savedData);
})

router.get("/getarticles", async (req,res) => {
    const data = await Article.find();
    res.json(data);
})

router.put('/updateArticlePrice/:id', async (req,res) => {
    const {id} = req.params;
    const {price} = req.body;

    const data = await Article.findByIdAndUpdate(id, {$set: {price}});

    if(data){
        res.json(data);
    }
})

router.put("/updateImage/:id", upload.single("file"), async (req, res) => {
    const {id} = req.params;
    cloudinary.uploader.upload(req.file.path, async (err, result) => {
        
        const data = await Article.findByIdAndUpdate(id, {$set: {image:result.secure_url}});
        res.json(data);
        
    })
})

router.put("/updateText/:id", async (req,res) => {
    const {id} = req.params;
    const {text} = req.body;

    const data = await Article.findByIdAndUpdate(id, {$set: {text}});

    if(data){
        res.json(data);
    }
})

module.exports = router;