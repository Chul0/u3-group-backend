const orderRoutes = require('express').Router()
const orderController = require('../controllers/orderController')


orderRoutes.post('/', orderController.createOrder)
orderRoutes.get('/', orderController.findAllOrder)
orderRoutes.get('/:id', orderController.getOneOrder)



module.exports = orderRoutes

