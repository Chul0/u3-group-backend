const userRoutes = require('express').Router()
const userController = require('../controllers/userController')


userRoutes.post('/', userController.create)
userRoutes.post('/login', userController.login)
userRoutes.get('/verify', userController.verifyUser)
userRoutes.get('/mycart', userController.getMyCart)
userRoutes.delete('/mycart/:id', userController.delete)
// userRoutes.get('/mycart/empty', userController.emptyMyCart)


module.exports = userRoutes

