import React from 'react'
import samsung_logo from '../photos/samsung-logo.jpg'
import oneplus_logo from '../photos/oneplus-logo.jpg'
import apple_logo from '../photos/apple-logo.jpg'
import vivo_logo from '../photos/vivo-logo.jpg'
import oppo_logo from '../photos/oppo-logo.jpg'
import xiaomi_logo from '../photos/Xiaomi-logo.jpg'
import infinix_logo from '../photos/infinix-logo.jpg'
import infocus_logo from '../photos/infinix-logo.jpg'
import poco_logo from '../photos/poco-logo.jpg'
import meizu_logo from '../photos/meizu-logo.jpg'
import motorola_logo from '../photos/motorola-logo.jpg'
import nokia_logo from '../photos/nokia-logo.jpg'
import realme_logo from '../photos/realme-logo.jpg'
import techno_logo from '../photos/techno-logo.jpg'
import iqoo_logo from '../photos/iqoo-logo.jpg'
import { Link } from 'react-router-dom'

export default function Companies(props) {

return (
    <div>

<div  className="companies">
        <div className="company-div-1 company-box">
          <div className="samsung-logo mobile">
           <Link to='/Companies/Samsung' onClick={()=>{props.Oneplus("samsung")}}> <img className="same" src={samsung_logo} alt="samsung" /></Link>
          </div>
          <div className="oneplus-logo mobile">
            <Link to="/Companies/Oneplus" onClick={()=>{props.Oneplus("oneplus")}}>
                <img className="same" src={oneplus_logo} alt="Oneplus" />
            </Link>
          </div>
          <div className="apple-logo mobile">
           <Link to='/Companies/Apple' onClick={()=>{props.Oneplus("apple")}}> <img className="same" src={apple_logo} alt="Apple" /></Link>
          </div>
        </div>
        <div className="company-div-2 company-box">
          <div className="vivo-logo mobile">
          <Link to='/Companies/Vivo' onClick={()=>{props.Oneplus("vivo")}}> <img className="same" src={vivo_logo} alt="Vivo" /></Link>
          </div>
          <div className="oppo-logo mobile">
          <Link to='/Companies/Oppo' onClick={()=>{props.Oneplus("oppo")}}> <img className="same" src={oppo_logo} alt="Oppo" /></Link>
          </div>
          <div className="Xiaomi-logo mobile">
          <Link to='/Companies/Xiaomi' onClick={()=>{props.Oneplus("mi")}}>  <img className="same" src={xiaomi_logo} alt="Xiaomi" /></Link>
          </div>
        </div>
        <div className="company-div-3 company-box">
          <div className="infinix-logo mobile">
          <Link to='/Companies/Infinix' onClick={()=>{props.Oneplus("infinix")}}> <img className="same" src={infinix_logo} alt="Infinix" /></Link>
          </div>
          <div className="infocus-logo mobile">
          <Link to='/Companies/Infocus' onClick={()=>{props.Oneplus("infocus")}}> <img className="same" src={infocus_logo} alt="Infocus" /></Link>
          </div>
          <div className="poco-logo mobile">
          <Link to='/Companies/Poco' onClick={()=>{props.Oneplus("poco")}}>  <img className="same" src={poco_logo} alt="Poco" /></Link>
          </div>
        </div>
        <div className="company-div-4 company-box">
          <div className="meizu-logo mobile">
          <Link to='/Companies/Meizu' onClick={()=>{props.Oneplus("meizu")}}> <img className="same" src={meizu_logo} alt="Meizu" /></Link>
          </div>
          <div className="motorola-logo mobile">
          <Link to='/Companies/Motorola' onClick={()=>{props.Oneplus("motorola")}}> <img className="same" src={motorola_logo} alt="Motorola" /></Link>
          </div>
          <div className="nokia-logo mobile">
          <Link to='/Companies/Nokia' onClick={()=>{props.Oneplus("nokia")}}>  <img className="same" src={nokia_logo} alt="Nokia" /></Link>
          </div>
        </div>
        <div className="company-div-5 company-box">
          <div className="realme-logo mobile">
          <Link to='/Companies/Realme' onClick={()=>{props.Oneplus("realme")}}>  <img className="same" src={realme_logo} alt="Realme" /></Link>
          </div>
          <div className="techno-logo mobile">
          <Link to='/Companies/Techno' onClick={()=>{props.Oneplus("techno")}}>  <img className="same" src={techno_logo} alt="Techno" /></Link>
          </div>
          <div className="iqoo-logo mobile">
          <Link to='/Companies/Iqoo' onClick={()=>{props.Oneplus("iqoo")}}>   <img className="same" src={iqoo_logo} alt="IQoo" /></Link>
          </div>
        </div>
      </div>


    </div>
  )
}
