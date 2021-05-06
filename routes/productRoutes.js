const productRoutes = require('express').Router()
const productController = require('../controllers/productController')


productRoutes.get('/', productController.getAllProducts)
productRoutes.get('/:id', productController.getOneProduct)



module.exports = productRoutes

