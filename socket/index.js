const {Server} = require('socket.io')

const io = new Server(8900, {
    cors: {
        origin: "http://localhost:3000"
    }
})

let users = []

const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
    users.push({userId, socketId})
}

const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId)
}

const getUser = (userId) => {
    console.log(users)
    return users.find((user) => user.userId === userId)
}

io.on("connection", (socket => {
    console.log("user connected")
    socket.on("addUser", userId => {
        addUser(userId, socket.id)
        io.emit("getUsers", users)
    })

    socket.on("sendMessage", ({senderId, receiverId, text}) => {
            const user = users.find((user) => user.userId === receiverId)
            console.log(user)
            try {
                io.to(user.socketId).emit("getMessage", {
                    senderId, text
                })
            } catch (e) {
                console.log(e)
            }
        }
    )

    socket.on("disconnect", () => {
        console.log("user disconnected")
        removeUser(socket.id)
        io.emit("getUsers", users)
    })
}))