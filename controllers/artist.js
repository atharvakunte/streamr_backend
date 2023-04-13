const Artist = require('../models/artist')

exports.createArtist=(req, res)=>{
    const artist = new Artist(req.body);
    artist.save((err, artist)=>{
        if(err){
            return res.status(400).json({
                error:"Please enter all required fields"
            });
        }

        res.json({
            name:artist.name
        })
    })
}