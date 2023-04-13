const playlist = require('../models/playlist');
const Playlist = require('../models/playlist');


//create Playlist
exports.createPlaylist = (req, res) =>{
    const playlist = new Playlist(req.body);
    playlist.user = req.profile;
    playlist.save((err, playlist)=>{
        if(err){
            return res.status(400).json({
                error:"Please enter all required fields"
            })
        }
        res.json({
            playlistName:playlist.name,
            createdBy:playlist.user.firstname
        })
    })
}

//get playlist by id
exports.getPlaylistById = (req, res, next, id)=>{
    Playlist.findById(id).exec((err, playlist)=>{
        if(err){
            return res.status(400).json({
                error:"Playlist not found"
            })
        }
        req.playlist = playlist;
        next();
    })
}

//get playlist by user


// get all Playlists


// delete Playlists


//add song to playlist


//remove song from playlist