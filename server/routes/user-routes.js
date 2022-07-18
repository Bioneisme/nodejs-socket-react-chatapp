const express = require('express')
const router = express.Router()
const Person = require('../models/Person')
const userController = require('../controllers/user-controller')

router.get('/', (req, res) => {
    Person.findAll().then(persons => res.send(persons))
})

router.post('/register', userController.registration)

router.post('/login', userController.login)

router.get('/getUser', userController.getUser)

router.get('/logout', userController.logout)


module.exports = router