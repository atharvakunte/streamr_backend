var mongoose = require('mongoose');
const{ObjectId} = mongoose.Schema;

var playlistSchema = new mongoose.Schema(
    {
        name:{type:String, maxlength:20, required:true},
        songs:{type:Array, default:[]},
        user:{type:ObjectId, ref:"User" }
    }
)

module.exports = mongoose.model("Playlist", playlistSchema)