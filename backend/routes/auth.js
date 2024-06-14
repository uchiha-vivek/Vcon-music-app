const express = require('express');
const bcrypt  =require('bcrypt')
const router = express.Router();
const {getToken} = require('../utils/helpers.js')
const User = require('../models/User.js')

router.post('/register', async function(req,res){

   const{email,password,firstName,lastName,userName} = req.body;
   
   // check user with particular email already exist or not
   const user = await User.findOne({email:email})
   if(user){
    return res.status(403).json({error:"User with this email id already exist !"})
   }
   // if user does not exist create new user
   const hashPassword = bcrypt.hash(password,10)
   const newUserData = {email,password:hashPassword,firstName,lastName,userName}
   const newUser = await User.create(newUserData)

   // creating token for the user

   const token=await getToken(email,newUser)

   const userToReturn = {...newUser.toJSON(),token}
   // deleting the hash password

   delete userToReturn.password

   return res.status(200).json(userToReturn)



})


// Building route for login

router.post("/login",async function(req,res){

  const{email,password} = req.body;
  const user= await User.findOne({email:email});
  // user dont exist

  if(!user){
   return res.status(403).json({error:"Invalid Credentials"})
  }

   const isPasswordValid = await bcrypt.compare((password,user.password));

   if(!isPasswordValid){
      return res.status(403).json({error:"Invalid Credentials"});
   }

   const token = await getToken(user.email,user);
   const userToReturn={...newUser.toJSON(),token}
   delete userToReturn.password
   return res.status(200).json(userToReturn)


})



module.exports=router