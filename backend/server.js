const mongoose = require("mongoose")
const Document = require("./document")
require("dotenv").config();

console.log(process.env.MONGODB_URL)
mongoose.connect(process.env.MONGODB_URL).then(() => console.log('Connected!')).catch((error) => console.log(error.message))

const io = require("socket.io")(3001, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
})

const defaultValue = ""

io.on("connection", socket => {
    socket.on("get-document", async docId => {
        const document =  await findCreateDoc(docId)
        socket.join(docId)
        socket.emit("load-document", document.data)
        socket.on('send-changes', delta => {
            socket.broadcast.to(docId).emit("receive-changes", delta)
        })
        socket.on("save-document", async data => {
            await Document.findByIdAndUpdate(docId, { data })
        })
    })
})

async function findCreateDoc(id) {
    if(id == null) return
    const document = await Document.findById(id)
    if(document) return document
    return await Document.create({ _id: id, data: defaultValue })
}