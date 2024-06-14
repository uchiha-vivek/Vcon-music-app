const express  = require('express')
const passport = require('passport')
const router = express.Router()
const User = require('../models/User.js')
const Playlist = require('../models/PlayList.js')
const Song= require('../models/Song.js')


router.post('/create',passport.authenticate("jwt",{session:false}), async function(req,res){

   const currentUser=  req.user
   const{name,thumbnail,songs} = req.body;
   if(!name || ! thumbnail || !songs){
    return res.status(301).json({error:"Insufficent Data"})
   }
   const playlistData = {name,thumbnail,songs,owner:currentUser._id,collaborators:[]}


    const playlist = await Playlist.create(playlistData)
    
    return res.status(200).json(playlist)


})


// get the playlist by id

router.get('/get/:playlistId', passport.authenticate("jwt",{session:false}), async function(req,res){
    const playlistId = req.params.playlistId

    const playlist  = await  Playlist.findOne({_id:playlistId})
    // if playlist not found

    if(!playlist){
        return res.status(301).json({error:"INVALID ID"})
    }

    return res.status(200).json(playlist)

}  )



// get all playlist by artist

router.get("/get/artist/:artistId",passport.authenticate("jwt",{session:false}), async function(req,res){
    const artistId = req.params.artistId;
     const artist = await User.findOne({_id:artistId})

    if(!artist){
        return res.status(200).json({error:"Invalid Artist"})
    }

    const playlist  = await Playlist.find({owner:artistId})
    return res.status(200).json({data:playlist});

})

// add song to playlist

router.post('/add/song',passport.authenticate("jwt",{session:false}), async function(req,res){
        const currentUser = req.user;
        const{playlistId,songId} = req.body;

        // check whether user is the owner of the playlist

        const playlist = await Playlist.findOne({_id:playlistId})
        // if playlist dont exist
        if(!playlist){
            return res.status(304).json({error:"Playlist dont exist"})
        }

     if(playlist.owner!= currentUser._id || !playlist.collaborators.includes(currentUser._id) ){
           return res.status(400).json({error:"Not allowed"})
     } 
     // check if song is valid
     const song = await Song.findOne({_id:songId});
     if(!song){
        return res.status(404).json({error:"song does not exist"})
     }
     // add the songs to playlist
     playlist.songs.push(songId)
})



module.exports = router