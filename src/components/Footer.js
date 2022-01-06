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
               <div className="input_form">
                   <form className="form">
                       <input />
                       <button className="btn_secondary">subscribe</button>
                   </form>
               </div>
               <div className="footer_items_wrapper">
                   <div className="footer_item about_footer">
                        <h4><Link to="/about">About us</Link></h4>
                        <h4><Link to="/about/contacts">Contact us</Link></h4>
                        <h4><Link to="/about">Talk to us</Link></h4>
                    </div>
                    <div className="footer_item">
                        <h4><Link to="/services">Service</Link></h4>
                        <h4><Link to="/blog/stories">Our stories</Link></h4>
                        <h4><Link to="/services/testimonials">Testimonials</Link></h4>
                    </div> 
                    <div className="footer_item">
                        <h4><Link to="/services/affiliation">Affiliate</Link></h4>
                        <h4><Link to="/services/collaboration">Collaboration</Link></h4>
                        <h4><Link to="/services/support">Support</Link></h4>
                    </div>
                    <div className='social_links'>
                        <div className="facebook">
                            <a target='_blank' href="https://www.facebook.com/benson.kamau.3766">
                                <FaIcons.FaFacebook />
                            </a>
                        </div>
                        <div className="twitter">
                            <a target='_blank' href="https://twitter.com/benson_kamaa">
                               <FaIcons.FaTwitter />  
                            </a>
                        </div>
                        <div className='github'>
                            <a target='_blank' href="https://github.com/sirben181">
                               <FaIcons.FaGithub />
                            </a>
                        </div>
                        <div className="youtube">
                           <a target="_blank" href="https://www.youtube.com">
                           <FaIcons.FaYoutube />
                           </a>
                        </div>
                    </div>
               </div>
               <span>Bensdesign&copy;2022copyright</span>
            </div>
            
        </div>
    )
}

export default Footer
