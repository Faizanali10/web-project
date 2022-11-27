const mongoose = require("mongoose");


const oneplusSchema=new mongoose.Schema({
    Name:String,
    Price:Number
});
module.exports=mongoose.model('oneplus',oneplusSchema);