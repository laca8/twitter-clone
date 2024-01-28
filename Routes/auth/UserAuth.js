const express = require('express')
const User = require('../../model/User')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('dotenv').config()
//======================================cloudinary config

//====================================== User Auth Routes
router.post('/register',async (req,res)=>{
    const {username,password,profile} = req.body
     try {
         let user = await User.findOne({username:username})
         if(user){
             res.status(400).json({msg:'user is already exist'})
         }
         user = await new User({
             username,
             password,
             profile
         })
         const salt = await bcrypt.genSalt(12)
         user.password = await bcrypt.hash(user.password,salt)

         const newUser = await user.save()
         const token = jwt.sign({id:newUser._id},process.env.jwt_secret)
            return res.status(201).json({token:token,profile:newUser.profile})
     } catch (err) {
         console.error(err);
         res.status(500).json('server error')
     }
})
router.post('/login',async (req,res)=>{
    const {username,password,profile} = req.body
    try {
        let user = await User.findOne({username:username})
        if(!user){
            res.status(400).json({msg:'invalid credintails'})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({ msg: 'password is not matched' })
        }
        const token = jwt.sign({id:user._id},process.env.jwt_secret)
           return res.status(201).json({token:token,profile:user.profile})
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json('server error')
    }
})
module.exports = router