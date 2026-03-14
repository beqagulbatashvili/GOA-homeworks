import express from "express"
import ReadFile from "./utils/ReadFile.js"

const app = express()

app.use(express.json())

// ყველა წიგნის დაბრუნება
app.get("/books", async function (req, res) {

    const books = await ReadFile("./books.json")

    res.status(200).json(books)
})

// კონკრეტული წიგნის დაბრუნება id-ით
app.get("/books/:id", async function (req, res) {

    const books = await ReadFile("./books.json")

    const id = Number(req.params.id)

    const book = books.find(function(item){
        return item.id === id
    })

    if(!book){
        return res.status(404).json({message: "Book not found"})
    }

    res.status(200).json(book)
})

app.listen(3000, function(){
    console.log("Server running on port 3000")
})