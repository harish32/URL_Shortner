const mongoose = require("mongoose")

const dbconnect = async()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/bookmark",{ useUnifiedTopology: true,useNewUrlParser: true },(err)=>{
            console.log(err)
        })
        console.log("connected")
    }catch(err){
        console.log(err)
    }
    
}

module.exports = dbconnect