const {Server} = require('socket.io')
require('dotenv').config()

const PORT = process.env.SOCKET_PORT || 8900

const io = new Server(PORT, {
    cors: {
        origin: process.env.CLIENT_URL
    }
})

let users = {}

const addUser = (userId, socketId) => {
    users[userId] = socketId
    console.log("user " + userId + " connected")
}

const removeUser = (socketId) => {
    for (let userId in users) {
        if (users[userId] === socketId) {
            delete users[userId];
            console.log("user " + userId + " disconnected")
        }
    }
}

io.on("connection", (socket => {
    socket.on("addUser", userId => {
        try {
            addUser(userId, socket.id)
        } catch (e) {
            console.log('connect: ' + e)
        }
    })

    socket.on("sendMessage", ({senderId, receiverId, text}) => {
            try {
                const user = users[receiverId]
                try {
                    io.to(user).emit("getMessage", {
                        senderId, text
                    })
                } catch (e) {
                    console.log(e)
                }
            } catch (e) {
                console.log('sendMessage: ' + e)
            }
        }
    )

    socket.on("disconnect", () => {
        try {
            removeUser(socket.id)
        } catch (e) {
            console.log('disconnect: ' + e)
        }
    })
}))