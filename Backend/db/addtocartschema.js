const mongoose = require("mongoose");


const addtocartSchema=new mongoose.Schema({
    Name:String,
    img_front:String,
    Price:Number,
    Quantity:Number,
    Total:Number
});
module.exports=mongoose.model('addtocarts',addtocartSchema);