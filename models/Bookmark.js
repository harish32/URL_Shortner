const mongoose = require("mongoose")

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
    
})

const Bookmark = mongoose.model("Bookmark",bookmarkSchema)