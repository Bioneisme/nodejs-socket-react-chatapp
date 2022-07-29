const {Server} = require('socket.io')

const io = new Server(8900, {
    cors: {
        origin: "http://localhost:3000"
    }
})

let users = {}

const addUser = (userId, socketId) => {
    users[userId] = socketId
}

const removeUser = (socketId) => {
    for (let userId in users) {
        if (users[userId] === socketId) {
            delete users[userId];
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