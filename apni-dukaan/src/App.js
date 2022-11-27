import './App.css';
import Navbar from './Components/Navbar' 
import Middlecom from './Components/Middlecom'
import Footer from './Components/Footer'
import Companies from './Components/Companies'
import Setting from './Components/Setting'
import {Route,Routes} from 'react-router-dom'
import React, { useEffect } from 'react'
import CompaniesLogoClick from './Components/CompaniesLogoClick'
import { useState } from 'react';
import MobileDetail from './Components/MobileDetail';
import Fillcart from './Components/Fillcart';

function App() {

const navbutton=()=>{
  let bar=document.querySelector(".bar");
  let sidenav=document.querySelector('ul');
  bar.addEventListener("click",function(){
    sidenav.classList.toggle("active");
  })
}


const [addcart,setaddcart]=useState()
// let total=0;
const addcartclick=(phonename)=>{
setaddcart(phonename);

}
// console.log("addcart",addcart)



// taking data from server get api
const [product,setproduct]=useState([])
useEffect(()=>{
  getproduct()
},[])

const getproduct=async()=>{
let result=await fetch("http://localhost:5000/data")
result=await result.json();
setproduct(result);
}
// console.log(product)


// taking mobile detail

const [mobiledetail,setmobiledetail]=useState("")
const Mobdet=(mobname)=>{
  setmobiledetail(mobname)
}
// console.log("mobiledet:",mobiledetail)


// data filter function
const [oneplus,setoneplus]=useState("")
const Oneplus=(CompanyName)=>{
  setoneplus(CompanyName)
}



  return (
  <>
<Navbar navbutton={navbutton}/>


<Routes>
  <Route exact path='/'element={<Middlecom/>}/>
  <Route path='/Companies'element={<Companies Oneplus={Oneplus}/>}/>
  <Route path='/Companies/Setting' element={<Setting/>}/>
  <Route path='/Companies/Samsung' element={<CompaniesLogoClick product={product} mobile={oneplus} Mobdet={Mobdet}/>}/>
  <Route path='/Companies/Oneplus' element={<CompaniesLogoClick product={product} mobile={oneplus} Mobdet={Mobdet}/>}/>
  <Route path='/Companies/Apple' element={<CompaniesLogoClick product={product} mobile={oneplus} Mobdet={Mobdet}/>} />
  <Route path='/Companies/Vivo' element={<CompaniesLogoClick product={product} mobile={oneplus} Mobdet={Mobdet}/>}/>
  <Route path='/Companies/Oppo' element={<CompaniesLogoClick product={product} mobile={oneplus} Mobdet={Mobdet}/>}/>
  <Route path='/Companies/Xiaomi' element={<CompaniesLogoClick product={product} mobile={oneplus} Mobdet={Mobdet}/>}/>
  <Route path='/Companies/Infinix' element={<CompaniesLogoClick product={product} mobile={oneplus} Mobdet={Mobdet}/>}/>
  <Route path='/Companies/Infocus' element={<CompaniesLogoClick product={product} mobile={oneplus} Mobdet={Mobdet}/>}/>
  <Route path='/Companies/Poco' element={<CompaniesLogoClick product={product} mobile={oneplus} Mobdet={Mobdet}/>}/>
  <Route path='/Companies/Meizu' element={<CompaniesLogoClick product={product} mobile={oneplus} Mobdet={Mobdet}/>}/>
  <Route path='/Comapanies/Motorola' element={<CompaniesLogoClick product={product} mobile={oneplus} Mobdet={Mobdet}/>}/>
  <Route path='/Comapanies/Nokia' element={<CompaniesLogoClick product={product} mobile={oneplus} Mobdet={Mobdet}/>}/>
  <Route path='/Companies/Realme' element={<CompaniesLogoClick product={product} mobile={oneplus} Mobdet={Mobdet}/>}/>
  <Route path='/Companies/Techno' element={<CompaniesLogoClick product={product} mobile={oneplus} Mobdet={Mobdet}/>}/>
  <Route path='/Companies/iqoo' element={<CompaniesLogoClick product={product} mobile={oneplus} Mobdet={Mobdet}/>}/>
  
  
   <Route path='/mobiledetail' element={<MobileDetail mobiledetail={mobiledetail} product={product} addcartclick={addcartclick}/>}/>
  <Route path='/Fillcart' element={<Fillcart product={product} addcart={addcart}/>}/>
</Routes>
{/* <MobileDetail mobiledetail={mobiledetail} product={product}/> */}

<Footer/>
  </>
  )}

export default App;
