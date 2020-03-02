const express = require("express")
const PORT = process.env.PORT || 3000
const mongoose = require("mongoose")

const postRouter = require('./routes/post')
const keys = require('./keys')

const app = express()
app.use('/api/post', postRouter)
mongoose.connect(keys.mongoUri)
    .then(()=>(console.log('mongoDB connected')))
    .catch( err => console.error(err))
app.listen(PORT, ()=>{
    console.log(`server started on port ${PORT}`)
})