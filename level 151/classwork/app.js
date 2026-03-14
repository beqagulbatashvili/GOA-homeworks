const express = require("express")

const app = express()

app.use(express.json())

const arr = ["apple", "banana", "orange", "mango", "grape"]

app.get("/info", (req, res) => {
    res.status(200).json(arr)
})

app.post("/info", (req, res) => {
    arr.push(req.body)
    res.status(200).json(arr)
})

app.listen(3000, () => {
    console.log("server starteed on port 3000")
})

