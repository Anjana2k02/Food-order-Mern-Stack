import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
return (
    <div className='footer' id='footer'>
            <div className="footer-content">
                    <div className="footer-content-left">
                            <img src={assets.logo} alt=''/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem neque harum consequuntur soluta cumque atque hic? Quo fuga corrupti dolorem et quidem provident eligendi aut cupiditate repellendus aperiam? Praesentium, eos.</p>
                            <div className='footer-social-icons'>
                                    <img src={assets.facebook_icon} alt="" />
                                    <img src={assets.twitter_icon} alt="" />
                                    <img src={assets.linkedin_icon} alt="" />

                            </div>
                    </div>

                    <div className="footer-content-center">
                            <h2>COMPANY</h2>
                            <ul>
                                    <li>Home</li>
                                    <li>About us</li>
                                    <li>Delivery</li>
                                    <li>Privacy Policy</li>
                            </ul>

                    </div>
                    <div className="footer-content-right">
                            <h2>GET IN TOUCH</h2>
                            <ul>
                                    <li>071 610 9447</li>
                                    <li>contact@deBonsail.com</li>
                            </ul>

                    </div>
                    
            </div>
            <hr />
            <p className="footer-copyright">
                    &copy; {new Date().getFullYear()} DeBonsai. All rights reserved.
            </p>
    </div>
)
}

export default Footer