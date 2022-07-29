const express = require('express')
const router = express.Router()
const chatController = require('../controllers/chat-controller')

router.post('/createChat', chatController.createChat)

router.get('/getChats/:userId', chatController.getChats)

router.post('/createMessage', chatController.createMessage)

router.get('/getMessages/:chatId', chatController.getMessages)

router.get('/getNewConversations', chatController.getNewConversations)

module.exports = router