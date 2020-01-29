const express = require("express")
const app = express()
const dbconnect = require("./db")
dbconnect()
const bookmark = require("./routes/bookmark")



app.use(express.json())

app.use("/bookmarks",bookmark)

app.use(function(err,req,res,next){res.status(500).json({err:err.message})})


app.listen(5000,console.log("running on port 5000"))