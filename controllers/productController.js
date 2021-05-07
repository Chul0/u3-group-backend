require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const models = require('../models')


const productController = {}


productController.getAllProducts = async (req, res) => {
    try {
        const product = await models.product.findAll()
        
           res.json({product})
    } catch (error) {
        res.json({error: error.message})
    }
}

productController.getOneProduct = async (req, res) => {
    try {
        const product = await models.product.findOne({
            where:{
                id: req.params.id
            }
        })
        
           res.json({product})
    } catch (error) {
        res.json({error: error.message})
    }
}


//Save products to my cart

productController.save = async (req, res) => {
    try {
        const product = await models.product.findOne({
            where:{
                id:req.params.id
            }
        })
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        
        const user = await models.user.findOne({
            where: {
                id: decryptedId.userId
            }
        })

        const newCart = await models.myCart.create({
            userId:user.id,
            productId:product.id
        })
        await user.addMyCart(newCart)
        await product.addMyCart(newCart)
  
        // let addAssociation = await user.addProducts(product)
        //addChildren doesn't allow duplicating a row, so we need to use create() instead.
        res.json({product, user, newCart})
    } catch (error) {
        res.json(error)
    }
}


module.exports =productController