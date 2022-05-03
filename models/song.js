var mongoose = require('mongoose');

var songSchema = new mongoose.Schema(
    {
        trackname:{type:String,required:true, maxlength:60},
        albumname:{type:String, maxlength:30},
        genre:{type:String, maxlength:20},
        artist:{type:String, maxlength:60, required:true},
        length:{type:String, required:true},
        songurl:{type:String, required:true},
        imgurl:{type:String}
    }
)

module.exports = mongoose.model("Song",songSchema);