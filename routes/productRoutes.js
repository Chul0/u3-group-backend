const productRoutes = require('express').Router()
const productController = require('../controllers/productController')


productRoutes.get('/', productController.getAllProducts)



module.exports = productRoutes

