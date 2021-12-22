import *as FaIcons from 'react-icons/fa'    
import *as RiIcons from 'react-icons/ri'    
import *as FcIcons from 'react-icons/fc'    
  
export const Navbarlinks=[
    {
     path:"/",
     icon:<FaIcons.FaHome className="navbar_icon"/>,
     title: 'Home'
    },
  

{
path:"/services",
 icon:<RiIcons.RiServiceLine className="navbar_icon"/>,
  title:'Services'
},

{
path:'/blog',
 icon:<FaIcons.FaBlog className="navbar_icon"/>,
title:'Blog'
},
{
 path:'/about',
  icon:<FcIcons.FcAbout  className="navbar_icon"/>,
title:'About' 
} 
]