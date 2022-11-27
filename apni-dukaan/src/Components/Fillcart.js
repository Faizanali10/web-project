import React, { useCallback, useReducer, useState } from 'react'
import { useEffect } from 'react'
export default function Fillcart() {

  
  const [ignored,forceUpdate]=useReducer(x=>x+1,0)

  const [cartdata,setcartdata]=useState([])

  const [fiam,setfiam]=useState(
    
  )

  let finalamount=0

  let total=0

  useEffect(()=>{
    getproduct()
    

    // onetimeamoutdisplay()
    // amount()
  },[ignored,total,fiam])
  
  
  const getproduct=async()=>{
  let result=await fetch("http://localhost:5000/cartdata")
  result=await result.json();
  setcartdata(result);
  }


// increment function
  const plus=async (Name,Quantity,Price)=>{
    
    let q=++Quantity
    if(q==1)
    total=Price
    else
    total=Price*(q)
   
    
    let result=await fetch("http://localhost:5000/put",{
method:'PUT',
  body:JSON.stringify({Name,q,total}),
    headers:{
      'Content-Type':'application/json',
        },
})
// amount()

forceUpdate()
// console.log("total",finalamount)z

  }

  // decrement function
  const minus=async (Name,Quantity,Price,totalPrice)=>{
    let q=--Quantity
   
          if(q==1||q<1)
          {
      total=Price
    q=1      
    }
      else if(q>1){
        
        total=totalPrice-Price
      }
    
    // console.log("minus total",total)
    if(q<1)
    q=1
    let result=await fetch("http://localhost:5000/put",{
method:'PUT',
  body:JSON.stringify({Name,q,total}),
    headers:{
      'Content-Type':'application/json',
        },
})
// amount()

forceUpdate()
// console.log("q name",q,Name)

  }


  // total amount function 

  const amount=()=>{
{
  cartdata.map((item,index)=>{
  finalamount=finalamount+item.Total
  });
}
// setfiam(finalamount+item.Total)
setfiam(finalamount)
console.log("finalamount",fiam)



  }


  







  return (
    <div>
      {
        cartdata.map((item,index)=>
      <div className='cartbox'>
        <div className='fillcartfrontimg' key={index}>
          <img className='cartimage' src={require(`./../photos/mobiles_img/${item.img_front}`)} key={index}/>
        </div>
        <div className='cartbox2'>
          <h1 className='fillphonename'>{item.Name}</h1>
           <p className='fillphoneprice'><i className="fa-solid fa-rupee-sign"></i> {item.Price}</p>
           <p className='qty'> Qty: {item.Quantity} <i className="fa-solid fa-rupee-sign"></i> {item.Total}</p>
           <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" className="btn btn-danger" onClick={()=>{minus(item.Name,item.Quantity,item.Price,item.Total)}}>-</button>
            <button type="button" className="btn btn-warning">{item.Quantity}</button>
            <button type="button" className="btn btn-success" onClick={()=>{plus(item.Name,item.Quantity,item.Price)}}>+</button>
          </div>
          <p className='fillcod'>Cash on Delivery available</p>
        </div>
      </div>
      )}

      <div className='paytotal'>
        <div className='amountshow'>
          <h1>Total amount</h1>
          <p>{fiam}</p>
        </div>
        <button className='checktotalamount' onClick={()=>{amount()}}>Check Total Amount</button>
      </div>
    </div>
  )
}
