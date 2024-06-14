const express = require('express')
var JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
const passport =require('passport')
const mongoose = require('mongoose')
const authRoutes = require('../backend/routes/auth.js')
const songRoutes = require('../backend/routes/song.js')
require('dotenv').config()
const User = require('./models/User.js')
const app = express()
app.use(express.json())

const PORT = 4000;
 mongoose.connect(process.env.DATABASE_URL,{
    useUnifiedTopology:true
 }).then(function(){
    console.log('Database connected successfully')
 }).catch(function(e){
    console.log("Error while connecting to Database")
 })

 
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT;
 
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
 User.findOne({id: jwt_payload.sub}, function(err, user) {
     if (err) {
         return done(err, false);
     }
     if (user) {
         return done(null, user);
     } else {
         return done(null, false);
         // or you could create a new account
     }
 });
}));

app.get('/',function(req,res){
    res.send('Hello')
})

app.use("/auth",authRoutes)
app.use("/song",songRoutes)



app.listen(PORT,function(){
    console.log(`Server is running on PORT ${PORT}`);
})