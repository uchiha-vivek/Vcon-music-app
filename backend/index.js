const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()


const PORT = 4000;
 mongoose.connect(process.env.DATABASE_URL,{
    useUnifiedTopology:true
 }).then(function(){
    console.log('Database connected successfully')
 }).catch(function(e){
    console.log("Error while connecting to Database")
 })

app.get('/',function(req,res){
    res.send('Hello')
})

app.listen(PORT,function(){
    console.log(`Server is running on PORT ${PORT}`);
})