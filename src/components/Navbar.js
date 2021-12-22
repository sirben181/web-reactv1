import React, { useState } from 'react'
import './navbar.css'
import Sidebar from './Sidebar'
// import *as FaIcons from 'react-icons/fa'
// import * as RiIcons  from 'react-icons/ri' 
// import * as FcIcons  from 'react-icons/fc' 
import { Link } from 'react-router-dom'
import { Navbarlinks } from './NavbarLinks'
const Navbar = () => {
 const[active,setActive]=useState(false)
    const handleActive=()=>{
      setActive(!active)
    }
    return (
        <>
        <div className='navbar_container'>
            <Sidebar />
            <div className="navbar_wrapper">
                <div className="navlinks">
                    <ul  onClick={handleActive} >
                        {Navbarlinks.map(link=>(
                            <li className={active ? 'show-active' : ''}
                            key={link.title}> 
                                <Link to={link.path}>
                                    {link.icon}<span>{link.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
              </div>
            </div>                  
        </div>
        </>
    )
}

export default Navbar
