import React from 'react'
import * as  FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './footer.css'
const Footer = () => {
    return (
        
        <div className='footer-container'>
            <div className='footer_wrapper'>
               <h3>
                   you can subscribe to our newsletter
               </h3>
               <div className="footer_items_wrapper">
                   <div className="footer_item">
                        <h4>About us</h4>
                        <h4>contact us</h4>
                        <h4>About us</h4>
                    </div>
                    <div className="footer_item">
                        <h4>About us</h4>
                        <h4>About us</h4>
                        <h4>About us</h4>
                    </div> 
                    <div className="footer_item">
                        <h4>About us</h4>
                        <h4>About us</h4>
                        <h4>About us</h4>
                    </div>
                   
               </div>
               <span>Bensdesign&copy;2022copyright</span>
            </div>
            
        </div>
    )
}

export default Footer
