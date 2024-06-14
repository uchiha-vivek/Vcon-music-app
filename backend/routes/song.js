
const express  =  require('express')
const router = express.Router();
const passport = require('passport')
const Song = require('../models/Song.js')

router.post("/create",passport.authenticate("jwt",{session:false}), async function(req,res){
      
   
       const{name,thumbnail,track} = req.body;

       if(!name || !thumbnail || !track){
        return res.status(301).json({error:"Insufficent Data provided"})
       }


       const artist = req.user._id;
       const songDetails = {name,thumbnail,track,artist};
       const createSong = await Song.create(songDetails)
       return res.status(200).json(createSong)


});



// get request  

router.get('/get/mysongs',passport.authenticate("jwt",{session:false}),async function(req,res){
    const currentUser= req.user;

    const songs = await Song.find({artist:'req.user._id'})

    return res.status(200).json({data:songs})

} )


module.exports= router



