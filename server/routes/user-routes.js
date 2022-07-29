const express = require('express')
const router = express.Router()
const {isAuth} = require('../middlewares/auth-middleware')
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


router.post('/register', userController.registration)

router.post('/login', userController.login)

router.get('/getUser', isAuth, userController.getUser)

router.get('/getUserById/:id', userController.getUserById)

router.post('/updateUser', isAuth, userController.updateUser)

router.get('/logout', userController.logout)

router.post('/uploadImage', upload.single('file', {width: 305, height: 305, crop: "fill"}),
    userController.uploadImage)

module.exports = router