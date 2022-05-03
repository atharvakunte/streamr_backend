const Song = require('../models/song');


//Create Song
exports.createSong=(req, res)=>{
    const song = new Song(req.body);
    song.save((err, song)=>{
        if(err){
            return res.status(400).json({
                error:"Please enter all required fields"
            });
        }

        res.json({
            trackname:song.trackname,
            artist:song.artist
        })
    })
}

//Fing Song by Id
exports.getSongById=(req, res, next, id)=>{
    Song.findById(id).exec((err, song)=>{
        if(err){
            return res.status(400).json({
                err:"No song found in DB"
            })

        }
        req.song = song;
        next();
    })
}

//Find all songs
exports.getAllSongs=(req, res)=>{
   Song.find({})
   .populate()
   .sort([[sortBy,"asc"]])
   .exec((err, songs)=>{
       if(err){
        return res.status(400).json({
            err: "No songs found"
        })
       }

       res.json(songs);
   })
}