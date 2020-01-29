const express = require("express")
const app = express()
const dbconnect = require("./db")
dbconnect()



app.use(express.json())



app.listen(5000,console.log("running on port 5000"))