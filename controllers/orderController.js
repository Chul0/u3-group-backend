require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const models = require('../models')


const  orderController ={}

orderController.createOrder = async (req, res) => {
    try {
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        
        const user = await models.user.findOne({
            where: {
                id: decryptedId.userId
            }
        })

        const product = await user.getProducts()

        const order = await models.order.create({
            address:req.body.address,
            creditCardNum:req.body.creditCardNum
        })
        
        await user.addOrders(order)
        await order.addProduct(product)

        await order.reload()
       
        res.json({user,order})
    } catch (error) {
        res.json(error)
    }
}

orderController.findAllOrder = async (req, res) => {
    try {
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        
        const user = await models.user.findOne({
            where: {
                id: decryptedId.userId
            }
        })

        let orders = await user.getOrders({include:models.product})

        res.json({user, orders})
    } catch (error) {
        res.json(error)
    }
}


module.exports = orderController