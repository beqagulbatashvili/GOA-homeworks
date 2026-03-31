const express = require("express")
require("dotenv").config()

const app = express()

const PORT = process.env.PORT || 3000

const products = [
    { id: 1, name: "Apple", price: 2 },
    { id: 2, name: "Banana", price: 1 },
    { id: 3, name: "Orange", price: 3 }
]

app.get("/", function(req, res) {
    res.send("Server works")
})

app.get("/products", function(req, res) {
    res.json(products)
})

app.get("/products/:id", function(req, res) {
    const id = Number(req.params.id)

    const found = products.find(function(item) {
        return item.id === id
    })

    if (!found) {
        return res.status(404).send("Product not found")
    }

    res.json(found)
})

app.listen(PORT, function() {
    console.log("Server running on port " + PORT)
})