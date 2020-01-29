const mongoose = require("mongoose")
const sh = require("shorthash");

const bookmarkSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    originalUrl:{
        type:String,
        required:true
    },
    hashedUrl:String,
    tags:[String],
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

bookmarkSchema.pre("save",function(){
    this.hashedUrl = sh.unique(this.originalUrl)
})

const Bookmark = mongoose.model("Bookmark",bookmarkSchema)

module.exports = Bookmark