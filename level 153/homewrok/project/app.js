import express from "express"
import bookRouter from "./routers/books.route.js"

const app = express()

app.use(express.json())

app.use(bookRouter)

app.listen(3000, function(){
    console.log("Server running on port 3000")
})