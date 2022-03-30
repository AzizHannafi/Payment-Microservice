const express = require('express')
const mongoose= require("mongoose");
const orderController = require("./Controllers/OrderController")
const app=express()
const cors = require('cors');

app.use(cors());

mongoose.connect("mongodb+srv://AzizHannafi:Aziz123@mongo.e0xet.mongodb.net/microservices-db?retryWrites=true&w=majority",(err, res)=>{
               
    if(err){
        console.log("Error while connection to database :"+err)
    }else{
        console.log("connection to database succeded ")
    }
})

app.use('/Orders',orderController)

app.listen(8001,()=>{
    console.log('server running at port 8001')
})