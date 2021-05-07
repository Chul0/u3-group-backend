require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const models = require('../models')
const mycart = require('../models/mycart')


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
        console.log(product);

        const order = await models.order.create({
            address:req.body.address,
            creditCardNum:req.body.creditCardNum
        })
        
        const myCart = await user.getMyCarts()

        await user.addOrders(order)
        await order.addProduct(product)

        await order.reload()

        for(let i=0 ; i < myCart.length; i++){
            await myCart[i].destroy()
          }
       
        res.json({user,product,order,myCart})
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

orderController.getOneOrder = async (req, res) => {
    try {
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        
        const user = await models.user.findOne({
            where: {
                id: decryptedId.userId
            }
        })

        const order = await models.order.findOne({
            where:{
                id:req.params.id
            }
        })

        let product = await order.getProducts()

        res.json({user, order, product})
    } catch (error) {
        res.json(error)
    }
}



module.exports = orderController