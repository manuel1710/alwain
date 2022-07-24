// const upload = require("../middlewares/upload");
const multer = require("multer");
const router = require("express").Router();
var mongoose = require('mongoose');
const fs = require('fs');
const path = require('path') 

var imageSchema = require('../model');


//storage area for uploads
const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,'uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({storage:storage});



router.post("/upload", upload.single("file"),(req,res)=>{
    // console.log(Date().toString());
    const saveImage = new imageSchema({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        tag: req.body.folder,
        uploadDate: Date().toString(),
        originalname: req.file.originalname,
        img:
        {
        // data: fs.readFileSync("../uploads/" + req.file.filename),
        data: fs.readFileSync(path.join(__dirname,'..','uploads', req.file.originalname)),
        contentType: req.file.mimetype,
        },
    });
    saveImage.save().then((res)=>{
        console.log('image is saved');
    })
    .catch((err)=>{
        console.log(err, 'error has occured');
    });
    res.send('Image is Saved');
    // res.send((req.file.filename));

    // if(req.file === undefined) return res.send("you must select a file.");
    // const imgUrl = `http://localhost:5000/${req.file.filename}__${req.file.uploadDate}`
    // return res.send(imgUrl);
    // return res.status(201).send({ message: "Photo uploaded Successfully" });
})
module.exports = router;