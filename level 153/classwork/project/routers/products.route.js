import express from "express"

const productRouter = express.Router()

productRouter.get("/", (req, res) => {
    const product = {
        id: 1,
        name: "Phone",
        price: 500
    }

    res.status(200).json(product)
})

export default productRouter