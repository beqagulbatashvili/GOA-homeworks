import express from "express"
import ReadFile from "./utils/ReadFile.js"

const app = express()

app.use(express.json())

app.get("/books", async function (req, res) {

    const books = await ReadFile("./books.json")

    let result = books

    const price = req.query.price
    const category = req.query.category
    const limit = req.query.limit
    const sort = req.query.sort

    if(price){
        result = result.filter(function(item){
            return item.price == price
        })
    }

    if(category){
        result = result.filter(function(item){
            return item.category == category
        })
    }

    if(sort === "asc"){
        result = result.sort(function(a,b){
            return a.price - b.price
        })
    }

    if(sort === "desc"){
        result = result.sort(function(a,b){
            return b.price - a.price
        })
    }

    if(limit){
        result = result.slice(0, Number(limit))
    }

    res.status(200).json(result)

})


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


app.post("/books", async function (req, res) {

    const books = await ReadFile("./books.json")

    const newBook = req.body

    books.push(newBook)

    res.status(201).json(newBook)

})

app.listen(3000, function(){
    console.log("Server running on port 3000")
})