const Bookmark = require("../models/Bookmark")
const validator = require("validator")

exports.addBookmark = async (req,res,next)=>{
    try{
        const status = validator.isURL(req.body.originalUrl)
        if(!status){
            return next(new Error("url not valid"))
        }
        const bookmark = await Bookmark.create(req.body)
        res.status(200).json({success:true,data:bookmark})
    }catch(err){
        next(err)
    }
    
}

exports.getBookmarks = async (req,res,next)=>{
    try{
        const bookmarks = await Bookmark.find()
        res.status(200).json({success:true,data:bookmarks})
    }catch(err){
        next(err)
    }
    
}

exports.getBookmark = async (req,res,next)=>{
    try{
        const bookmark = await Bookmark.findById(req.params.id)
        res.status(200).json({success:true,data:bookmark})
    }catch(err){
        next(err)
    }
}

exports.updateBookmark = async (req,res,next)=>{
    try {
        let bookmark = await Bookmark.findById(req.params.id)
        if(req.body.originalUrl){
            const status = validator.isURL(req.body.originalUrl)
            if(!status){
                return next(new Error("url not valid"))
            }
            bookmark.originalUrl = req.body.originalUrl
        }
        bookmark.title = req.body.title
        bookmark.tags = req.body.tags
        bookmark = await bookmark.save({validateBeforeSave:true})
        res.status(200).json({success:true,data:bookmark})
    }catch(err){
        next(err)
    }
}

exports.deleteBookmark = async (req,res,next)=>{
    try{
        await Bookmark.findByIdAndDelete(req.params.id)
        res.status(200).json({sucess:true})
    }catch(err){
        next(err)
    }
    
}