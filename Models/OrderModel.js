const mongoose = require("mongoose")

const orderSchema= mongoose.Schema({
    id:{
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    price:{
        type: String,
        require: true
    },
    quantity:{
        type: String,
        require: true
    },
 
})
const OrderModel= mongoose.model("orders", orderSchema);
module.exports= OrderModel;