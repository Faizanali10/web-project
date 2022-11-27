import React, { useEffect, useState } from 'react'

export default function MobileDetail(props) {
  
const sendData=async (Name,Price,img_front,Total=1,Quantity=1)=>{
  
let result=await fetch("http://localhost:5000/post",{
method:'POST',
  body:JSON.stringify({Price,Total,Quantity,Name,img_front}),
    headers:{
      'Content-Type':'application/json',
        },
})
console.log(await result.json());
}

// console.log(Name,Price,img_front,)


    return (
    <div>
     
    {
        props.product.filter(item=>item.Name===props.mobiledetail).map((item,index)=>
        <div> 
          <div className='f-img-container'>
        <div className='f-img'>
      <img src={require(`./../photos/mobiles_img/${item.img_front}`)} alt='img' />
        </div>
        <div className='f-img'>
        <img src={require(`./../photos/mobiles_img/${item.img_back}`)} alt='img' />
        </div>
        {/* <div className='f-img'>
        <img src={require(`./../photos/mobiles_img/${item.img_side}`)} alt='img' />
        </div> */}
          </div>

          <div className='name-price-div'>
              <h1 className='mobile-name' key={index}>{item.Name}</h1>
              <p className='mobile-price'><i className="fa-solid fa-rupee-sign"></i> {item.Price}</p>
            </div>
            <div className='button-div'>
              <button className='buybtn'>Buy</button>
              <button className='addtocartbtn' onClick={()=>{props.addcartclick(item.Name);sendData(item.Name,item.Price,item.img_front)}}>Add to cart</button>
            </div>
            {/* <Link to='/Filledcart'></Link> */}
              <table>
                <tr>
                  <th className='modet'>Model</th>
                  <th className='data'>{item.Name}</th>
                </tr>

                <tr>
                  <th className='modet'>Display</th>
                  <th className='data'>{item.Display}</th>
                </tr>

                <tr>
                  <th className='modet'>Ram</th>
                  <th className='data'>{item.RAM}</th>
                </tr>

                <tr>
                  <th className='modet'>Rom</th>
                  <th className='data'>{item.ROM}</th>
                </tr>

                <tr>
                  <th className='modet'>Version</th>
                  <th className='data'>{item.Version}</th>
                </tr>

                <tr>
                  <th className='modet'>Cpu</th>
                  <th className='data'>{item.CPU}</th>
                </tr>

                <tr>
                  <th className='modet'>Gpu</th>
                  <th className='data'>{item.GPU}</th>
                </tr>

                <tr>
                  <th className='modet'>Network</th>
                  <th className='data'>{item.Network}</th>
                </tr>

                <tr>
                  <th className='modet'>Battery</th>
                  <th className='data'>{item.Battery}</th>
                </tr>
                </table>

       


        </div>
        )}
        
    </div>
  )
}
