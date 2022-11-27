const express=require('express');
require('./db/config')
const oneplus=require('./db/oneplus')
const addtocartschema=require('./db/addtocartschema')
const http=require('http')
const cors=require('cors')
// const data=async()=>{
// let dbd =await oneplus.find();
// console.log(dbd);}
// data();
const app=express();

app.use(cors({
    origin:'http://localhost:3000'
}))
app.use(express.json())
app.post('/post',async (req,res)=>{
    let resul=await addtocartschema.find({Name:req.body.Name})
    console.log(resul.length)
    
   if(resul.length==0){
        let adcrt= new addtocartschema(req.body)
        let result= adcrt.save()
        res.send(result)
   } 
})
app.put('/put',async (req,res)=>{
    // console.log(req.body)
    let data=await addtocartschema.findOneAndUpdate(
        {Name:req.body.Name},
        {$set:{Quantity:req.body.q,Total:req.body.total}}
    )
    res.send()
})

app.get('/cartdata',async(req,res)=>{
    let data=await addtocartschema.find();
    // console.log(data);
    res.send(data);
})

app.get('/data',async(req,res)=>{
    let data=await oneplus.find();
    // console.log(data);
    res.send(data);
})

app.listen(5000,()=>{
    console.log("server is running");
});
