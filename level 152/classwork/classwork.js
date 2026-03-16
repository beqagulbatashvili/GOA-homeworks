const express = require("express")

const app = express()

const products = [
    { id: 1, name: "Product1", price: 10, category: "A" },
    { id: 2, name: "Product2", price: 20, category: "B" },
    { id: 3, name: "Product3", price: 30, category: "C" },
    { id: 4, name: "Product4", price: 40, category: "A" },
    { id: 5, name: "Product5", price: 50, category: "B" },
    { id: 6, name: "Product6", price: 60, category: "C" },
    { id: 7, name: "Product7", price: 70, category: "A" },
    { id: 8, name: "Product8", price: 80, category: "B" },
    { id: 9, name: "Product9", price: 90, category: "C" },
    { id: 10, name: "Product10", price: 100, category: "A" }
]

app.get("/products", (req,res) =>{
    const category = req.query.category

    if (category) {
        const filtered = products.filter(function(product){
            return product.category === category
        })
        res.status(200).json(filtered)
    } else{
        res.status(200).json(products)
    }
})

app.listen(3000, function(){
    console.log("Server running on port 3000")
})