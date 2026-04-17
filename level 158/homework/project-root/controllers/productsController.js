// ვიღებთ ფუნქციებს ფაილიდან
const { readFileData, writeFileData } = require('../utils/file')

// აბრუნებს ყველა პროდუქტს
async function getAllProducts(req, res) {
    const products = await readFileData()
    res.json(products)
}

// აბრუნებს ერთ პროდუქტს id-ის მიხედვით
async function getProductById(req, res) {
    const products = await readFileData()
    const product = products.find(item => item.id == req.params.id)

    if (!product) {
        return res.status(404).json({ message: 'Product not found' })
    }

    res.json(product)
}

// ამატებს ახალ პროდუქტს
async function createProduct(req, res) {
    const { name, category, price, stock, rating } = req.body

    if (!name || !category || price == null || stock == null || rating == null) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const products = await readFileData()

    const newProduct = {
        id: products.length ? products[products.length - 1].id + 1 : 1,
            name,
            category,
            price,
            stock,
            rating,
        createdAt: new Date().toISOString().split('T')[0]
    }

    products.push(newProduct)
    await writeFileData(products)

    res.status(201).json(newProduct)
}

// აახლებს არსებულ პროდუქტს
async function updateProduct(req, res) {
    const products = await readFileData()
    const index = products.findIndex(item => item.id == req.params.id)

    if (index === -1) {
        return res.status(404).json({ message: 'Product not found' })
    }

    products[index] = { ...products[index], ...req.body }
    await writeFileData(products)

    res.json(products[index])
}

// შლის პროდუქტს
async function deleteProduct(req, res) {
    const products = await readFileData()
    const filtered = products.filter(item => item.id != req.params.id)

    if (filtered.length === products.length) {
        return res.status(404).json({ message: 'Product not found' })
    }

    await writeFileData(filtered)
    res.json({ message: 'Deleted successfully' })
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}