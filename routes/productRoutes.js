const productRoutes = require('express').Router()
const productController = require('../controllers/productController')


productRoutes.get('/', productController.getAllProducts)
productRoutes.get('/:id', productController.getOneProduct)
productRoutes.post('/:id', productController.save)



module.exports = productRoutes

