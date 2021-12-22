import React, { useState } from 'react'
import './sidebar.css'
 import * as FaIcons  from 'react-icons/fa' 
 import * as AiOutlineIcons  from 'react-icons/ai' 
 import * as RiIcons  from 'react-icons/ri' 
 import * as FcIcons  from 'react-icons/fc' 
import { Link } from 'react-router-dom'
const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)
    return (
        <>
        <div className={sidebar ? 'menubtn-invisible' : 'menubtn-visible'}>
         <FaIcons.FaBars className="menu_icon menubars" onClick={()=>setSidebar(!sidebar)}/>  
           
        </div>
        <div className={sidebar ? 'menu' : 'notmenu'}>
           <ul>
               <div className="closeIcon" onClick={()=>setSidebar(!sidebar)}>
                   <AiOutlineIcons.AiOutlineClose className="menu_icon" />
               </div>               
               <li onClick={()=>setSidebar(!sidebar)}> 
                   <Link to='/'>
                        <FaIcons.FaHome className="menu_icon"/>
                       <span>Home</span>
                    </Link>   
                </li>
               <li onClick={()=>setSidebar(!sidebar)}>
                   <Link to="/services">
                       <RiIcons.RiServiceLine className="menu_icon"/>
                       <span>Service</span>
                   </Link>
                </li>
               <li onClick={()=>setSidebar(!sidebar)}>
                   <Link to='/blog'>
                      <FaIcons.FaBlog className="menu_icon"/>
                   <span>Blog</span>
                   </Link>
                   </li>
               <li onClick={()=>setSidebar(!sidebar)}>
                   <Link to='/about'>
                       <FcIcons.FcAbout className="menu_icon" />
                   <span>About</span>  
                    </Link> 
               </li>
            </ul> 
        </div>
        </>
    )
}

export default Sidebar
