require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const models = require('../models')


const  userController ={}

//signup
userController.create = async (req, res) => {
    try {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10)

        const user = await models.user.create({
            email: req.body.email,
            password: hashedPassword
        })

        const encryptedId = jwt.sign({ userId: user.id}, process.env.JWT_SECRET)
        

        res.json({user, message: 'User created!', userId: encryptedId})
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message})
    }
}

//login

userController.login = async(req, res) => {
    try {
      const user = await models.user.findOne({
        where: { 
            email: req.body.email 
        }
      })
  
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const encryptedId = jwt.sign({ userId: user.id}, process.env.JWT_SECRET)

        res.json({ user, message: 'login successful', userId:encryptedId })
      } else {
        res.status(401).json({ message: 'login failed' })
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message })    
    }
  }


  userController.verifyUser = async (req, res) => {
    try {
      const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
      
      const user = await models.user.findOne({
        where: {
          
          id: decryptedId.userId
        }
      })
  
      if (user) {
        res.json({user, message:'user found'})
      }else {
        res.status(404).json({message: 'user not found'})
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({error: error.message})
    }
  }

  userController.getMyCart = async (req, res) => {
    try {
      
      const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
      
      const user = await models.user.findOne({
        where: {
          
          id: decryptedId.userId
        }
      })
    
      const savedProduct = await user.getProducts()
  
      res.json(savedProduct)
    } catch (error) {
      res.json(error)
    }
  }

  userController.delete =async (req,res) => {
    try {
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
    
        const user = await models.user.findOne({
      where: {
        
        id: decryptedId.userId
      }
    })

      const deleteFromCart = await models.myCart.destroy({
            where:{
                userId: decryptedId.userId,
                productId: req.params.id               
            }
        })
  
        res.json({user, deleteFromCart})
    } catch (error) {
        res.json({error: error.message})
    }
}



// userController.emptyMyCart =async (req,res) => {
//   try {
//       const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
  
//       const user = await models.user.findOne({
//     where: {
      
//       id: decryptedId.userId
//     }
//   })

//     const myCart = await user.getMyCarts()

//       res.json({user,myCart})
//   } catch (error) {
//       res.json({error: error.message})
//   }
// }

  module.exports = userController