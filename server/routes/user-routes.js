const express = require('express')
const router = express.Router()
const Person = require('../models/Person')
const userController = require('../controllers/user-controller')
const {v2: cloudinary} = require("cloudinary");
const {CloudinaryStorage} = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "AVATARS",
    },
});

const upload = multer({storage: storage});


router.get('/getUsers', (req, res) => {
    Person.findAll().then(persons => res.send(persons))
})

router.post('/register', userController.registration)

router.post('/login', userController.login)

router.get('/getUser', userController.getUser)

router.get('/getUserById/:id', (req, res) => {
    Person.findByPk(req.params.id).then(person => {
        res.send(person)
    }).catch(e => {
        res.status(400).send(e)
    })
})

router.post('/updateUser', userController.updateUser)

router.get('/logout', userController.logout)

router.post('/uploadImage', upload.single('file', {width: 305, height: 305, crop: "fill"}),
    userController.uploadImage)

module.exports = router