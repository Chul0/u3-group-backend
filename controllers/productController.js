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



module.exports =productController