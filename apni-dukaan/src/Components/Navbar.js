import React from 'react'
import { NavLink } from 'react-router-dom'
import Fillcart from './Fillcart'


export default function Navbar(props) {
  return (
    <nav>
        <h1>Apni Dukaan</h1>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className='hide-all-thing' to="/Companies" >Companies</NavLink>
          </li>
          <li>
            <NavLink to="/Companies/Setting">Setting</NavLink>
          </li>
        </ul>
        <div>
          <NavLink to='/Fillcart'><i className="fa-brands fa-opencart fa-2x icon"></i></NavLink>
          <i className="fa-solid fa-bars fa-2x icon bar" onClick={()=>{props.navbutton()}}></i>
        </div>
      </nav>
  )
}
