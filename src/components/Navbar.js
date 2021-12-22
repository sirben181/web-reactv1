import React from 'react'
import './navbar.css'
import Sidebar from './Sidebar'
import *as FaIcons from 'react-icons/fa'
import * as RiIcons  from 'react-icons/ri' 
import * as FcIcons  from 'react-icons/fc' 
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
        <div className='navbar_container'>
            <Sidebar />
            <div className="navbar_wrapper">
                <div className="navlinks">
                    <ul>
                <li > 
                   <Link to='/'>
                        <FaIcons.FaHome className="navbar_icon"/>
                       <span>Home</span>
                    </Link>   
                </li>
               <li >
                   <Link to="/services">
                       <RiIcons.RiServiceLine className="navbar_icon"/>
                       <span>Services</span>
                   </Link>
                </li>
                <li>
                   <Link to='/blog'>
                      <FaIcons.FaBlog className="navbar_icon"/>
                   <span>Blog</span>
                   </Link>
                   </li>
               <li>
                   <Link to='/about'>
                       <FcIcons.FcAbout className="navbar_icon" />
                   <span>About</span>  
                    </Link> 
                    </li>
                    </ul>
              </div>
            </div>                  
        </div>
        </>
    )
}

export default Navbar
