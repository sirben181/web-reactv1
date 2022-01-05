import React from 'react'
import * as  FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './footer.css'
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer_wrapper'>
                <div className='services_offered'>
                   
                     <p>
                         <Link to="">
                         Webdesign
                        </Link>
                     </p>
                     <p>
                         <Link to=''>
                         wordpress
                        </Link>
                     </p>
                     <p>
                         <Link to=''>
                            landing page
                        </Link>
                     </p>
                     <p>
                         <Link to=''>
                         Webdesign
                        </Link>
                     </p>
                   
 this is the best react youtube channnel lets get this good , hello there welcome to my youtube channel lets learn the coding journey and lets master the skill
                </div>
                <div className="about us">
                    
                        <p>
                            <Link>about</Link>
                        </p>
                        <p>
                            <Link>contact us</Link>
                        </p>
                        <p>
                            <Link>collaborate</Link>
                        </p>
                   
                </div>
                <div className="socialmedia">
        
                        <p>
                            <FaIcons.FaFacebook />
                        </p>
                    
                </div>

            </div>
            
        </div>
    )
}

export default Footer
