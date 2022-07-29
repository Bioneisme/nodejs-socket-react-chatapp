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
        addUser(userId, socket.id)
    })

    socket.on("sendMessage", ({senderId, receiverId, text}) => {
            const user = users[receiverId]
            try {
                io.to(user).emit("getMessage", {
                    senderId, text
                })
            } catch (e) {
                console.log(e)
            }
        }
    )

    socket.on("disconnect", () => {
        removeUser(socket.id)
    })
}))