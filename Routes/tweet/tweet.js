const express = require('express')
const User = require('../../model/User')
const router = express.Router()
const jwt = require('jsonwebtoken')
const Tweet = require('../../model/Tweet')
const auth = require('../../middleware/auth')
require('dotenv').config()
//====================================== User Auth Routes
router.post('/',auth,async (req,res)=>{
    const {tweet,file} = req.body 
     try {
         const user = await User.findById(req.user._id)
         const newTweet = await new Tweet({
             tweet,
             file,
             profile:user.profile,
             user:user.username
         })
         await newTweet.save()
         res.json(newTweet)
     } catch (err) {
         console.error(err);
         res.status(500).send('server error')
     }

})
router.get('/',async (req,res)=>{
      try {
          const tweets = await Tweet.find()
          res.json(tweets)
      } catch (err) {
        console.error(err);
        res.status(500).send('server error')
      }
})
router.post('/likes/:id',async (req,res)=>{
    const tweet_id = req.params.id
    const tweet = await Tweet.findById(req.params.id)
    tweet.likes +=1;
    const updateDocument = await Tweet.findOneAndUpdate(req.params.id,{
        new:true,
    })
    return res.status(201).json({msg:'liked tweet'})
})

router.post('/comments/:id',async (req,res)=>{
    const tweet_id = req.params.id
    const tweet = await Tweet.findOne({_id:tweet_id})
        const {comment} = req.body
        tweet.comments = [...tweet.comments,comment]
        const updateDocument = await Tweet.findOneAndUpdate({_id:tweet_id},{
            new:true,
    })
    return res.status(201).json({msg:'commented tweet'})
})
module.exports = router