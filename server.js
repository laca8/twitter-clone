const express = require('express')
const mongoose = require('mongoose')
const user = require('./Routes/auth/UserAuth')
const tweet = require('./Routes/tweet/tweet')
const uploadRoutes = require('./Routes/upload')
const uploadT = require('./Routes/tweet/uploadTweet')
const path = require('path')
const app = express();
const dbUri = require('./config/db')
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
//db
dbUri()
__dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
__dirname = path.resolve()
app.use('/uploadsT', express.static(path.join(__dirname, '/uploadsT')))
// routes
app.use('/api/users', user);
app.use('/api/tweet', tweet);
app.use('/api/upload', uploadRoutes)
app.use('/api/uploadT', uploadT)
const PORT = process.env.PORT || 5000
//serve static
app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
})
