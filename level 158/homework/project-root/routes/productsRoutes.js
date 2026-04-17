// express ბიბლიოთეკის ჩართვა
const express = require('express')
// router გამოიყენება route-ების დასაყოფად
const router = express.Router()
const controller = require('../controllers/productsController')

router.get('/', controller.getAllProducts)
router.get('/:id', controller.getProductById)
router.post('/', controller.createProduct)
router.put('/:id', controller.updateProduct)
router.delete('/:id', controller.deleteProduct)

module.exports = router