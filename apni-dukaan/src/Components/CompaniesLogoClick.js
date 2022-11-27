import React from 'react'
import { Link } from 'react-router-dom';

export default function CompaniesLogoClick(props) {
  
  return (
    <div>
    <div className="logo-flex">
      
      {  
     props.product.filter(item=>item.Mobile===props.mobile).map((item,index)=>
      
      <div className="companies-img-div" onClick={()=>{props.Mobdet(item.Name)}}>
        <Link to='/mobiledetail'>
        <img src={require(`./../photos/mobiles_img/${item.img_front}`)} alt={item.img_front}/>
        </Link>
       <hr></hr>
        <div>
          <h1 className='mobile-name-size' key={index}>{item.Name}</h1>
          <hr></hr>
          <p className='free-no-cost-size'>no cost EMI/additional Exchange offer</p>
          <hr></hr>
          <p className='free-no-cost-size'>Free Delivery by Apni Dukkan</p>
        </div>
      </div>
      )}
      </div>
    </div> 
    )
}
