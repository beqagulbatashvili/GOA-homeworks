import ReadFile from "../utils/ReadFile.js"

export async function getBooks(req, res){

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
}


export async function getBookById(req, res){

    const books = await ReadFile("./books.json")

    const id = Number(req.params.id)

    const book = books.find(function(item){
        return item.id === id
    })

    if(!book){
        return res.status(404).json({message: "Book not found"})
    }

    res.status(200).json(book)
}


export async function createBook(req, res){

    const books = await ReadFile("./books.json")

    const newBook = req.body

    books.push(newBook)

    res.status(201).json(newBook)
}


export async function updateBook(req, res){

    const books = await ReadFile("./books.json")

    const id = Number(req.params.id)

    const index = books.findIndex(function(item){
        return item.id === id
    })

    if(index === -1){
        return res.status(404).json({message: "Book not found"})
    }

    books[index] = req.body

    res.status(200).json(books[index])
}


export async function deleteBook(req, res){

    const books = await ReadFile("./books.json")

    const id = Number(req.params.id)

    const index = books.findIndex(function(item){
        return item.id === id
    })

    if(index === -1){
        return res.status(404).json({message: "Book not found"})
    }

    const deleted = books.splice(index, 1)

    res.status(200).json(deleted[0])
}