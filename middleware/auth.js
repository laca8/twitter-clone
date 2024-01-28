const jwt = require('jsonwebtoken')
const User = require('../model/User')
require('dotenv').config()
const auth = async (req,res,next)=>{
    try {
        const token = req.header('x-auth-token')
        if(!token){
            res.status(404).json({msg:'user is not authorized'})
        }
        const verifiedToken = await jwt.verify(token,process.env.jwt_secret);
        req.user = await User.findOne({_id:verifiedToken.id})


        next()

    } catch (err) {
        console.error(err);
        res.status(404).json({msg:'token not valid'})

    }
}
module.exports = auth