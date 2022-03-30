const express= require("express");

const router= express.Router();
const axion = require('axios')
const OrderModel = require('../Models/OrderModel');

router.use(express.json());

router.get("/GetAll", (req, res)=>{
    OrderModel.find({},(err, result)=>{
        if(err){
            console.log(err);
            res.json(result);
        }else{
            console.log(result);
            res.json(result);
        }
    })
})

router.post("/CreateOrder", async(req,res)=>{
    const response = await getProduct(req.body.id)
    const updateProd = await getProduct(req.body.id)
   
    order={
        id:req.body.id,
        name:response.name,
        price: req.body.quantity * response.price,
        quantity: req.body.quantity
    }

    updateProd.quantity=updateProd.quantity - req.body.quantity;

    const newOrder= new OrderModel(order)

    const updatedOrder= new OrderModel(updateProd)
    //console.log(updatedOrder)
    const updateReq= await updateProduct(req.body.id,updatedOrder)

    await newOrder.save()
  
    res.json(newOrder)
})

getProduct =async (id)=>{
    try {
        const response = await  axion.get(`http://localhost:8000/GetSingleProduct/${id}`)
        //console.log(response.data)
        return response.data
    } catch (error) {
        throw (error)
    }
}

updateProduct =async (id, prod)=>{
    try {
        const response = await  axion.patch(`http://localhost:8000/UpdateProduct/${id}`,prod)
        //console.log(response.data)
        return response.data
    } catch (error) {
        throw (error)
    }
}



module.exports= router;