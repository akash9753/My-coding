import React from 'react'
import { NavLink } from "react-router-dom"
import {Nav} from "./NavbarStyle"
const Navbar = () => {
  return (
    <Nav>
      <div className='menuIcon'>
        <ul className='navbar-list'>
          <li>
            <NavLink className= "navbar-link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className= "navbar-link" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className= "navbar-link" to="/service">Service</NavLink>
          </li>
          <li>
            <NavLink className= "navbar-link" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  )
}



export default Navbar