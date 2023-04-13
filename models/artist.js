var mongoose = require('mongoose');

var artistSchema = new mongoose.Schema(
    {
        name:{type:String,required:true, maxlength:60},
        description:{type:String, maxlength:2000},
        imgurl:{type:String}
    }
)

module.exports = mongoose.model("Artist",artistSchema);