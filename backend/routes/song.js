
const express  =  require('express')
const router = express.Router();
const passport = require('passport')
const Song = require('../models/Song.js')
const User = require('../models/User.js')
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



// route to get song that any specific artist has published

router.get('/get/artist',passport.authenticate("jwt",{session:false}),async function(req,res){
    const {artistId} = req.body;
    // check whether artist exist or not
      const artist = await User.find({_id:artistId})
      if(!artist){
        return res.status(301).json({err:"Artist does not exist"})
      }
    const songs = await Song.find({artist:artistId})
    return res.status(200).json({data:songs})
})

// route to get single song by name

router.get('/get/name',passport.authenticate("jwt",{session:false}),async function(req,res){
    const {songName} = req.body;

    const songs= await Song.find({name:songName})

    return res.status(200).json({data:songs})
})



module.exports= router



