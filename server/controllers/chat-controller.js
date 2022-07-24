const {Op} = require('sequelize')
const Chat = require('../models/Chat')
const Message = require('../models/Message')

class ChatController {
    createChat(req, res, next) {
        try {
            const {senderId, receiverId} = req.body
            Chat.create({
                users: [senderId, receiverId]
            }).then(chat => {
                res.send(chat)
            }).catch(e => {
                res.status(400).send({message: e})
            })
        } catch (e) {
            next(e)
        }
    }

    getChats(req, res, next) {
        try {
            const {userId} = req.params
            Chat.findAll({
                where: {
                    users: {
                        [Op.contains]: [userId]
                    }
                }
            }).then(chats => {
                res.send(chats)
            }).catch(e => {
                res.status(400).send({message: e})
            })
        } catch (e) {
            next(e)
        }
    }

    createMessage(req, res, next) {
        try {
            const {chatId, senderId, text} = req.body
            Message.create({
                chatId,
                senderId,
                text
            }).then(msg => {
                res.send(msg)
            }).catch(e => {
                res.status(400).send({message: e})
            })
        } catch (e) {
            next(e)
        }
    }

    getMessages(req, res, next) {
        try {
            const {chatId} = req.params
            Message.findAll({
                where: {
                    chatId: chatId
                }
            }).then(messages => {
                res.send(messages)
            }).catch(e => {
                res.status(400).send({message: e})
            })
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new ChatController()