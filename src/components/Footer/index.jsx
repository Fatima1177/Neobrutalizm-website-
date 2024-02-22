import './style.scss'

import React from 'react'

const Footer = () => {
  return (
    <div className='footer-sec'>
        <div className="big-box">
            <div className="mini-box">
                <ul>
                    <h2>Catalog</h2>
                    <li>Payday Deals</li>
                    <li>Best Seller</li>
                    <li>Bottom</li>
                    <li>Top</li>
                    <li>Bags</li>
                    <li>Accessories</li>
                </ul>
            </div>
            <div className="mini-box">
                <ul>
                    <h2>Customer Info</h2>
                    <li>About Us</li>
                    <li>Stockist</li>
                    <li>Lifestyle</li>
                    <li>FAQS</li>
                    <li>Contact</li>
                    <li>For Business</li>
                </ul>
            </div>
            <div className="mini-box">
                <ul>
                    <h2>Legal Pages</h2>
                    <li>Deliveries & Returns</li>
                    <li>Term & Conditions</li>
                    <li>Refund Policy</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="inpt-box">
                <h1>Sign Up For Updates</h1>
                <input type="text" placeholder='Whats your email address?'/>
                <button>Subscribe</button>
            </div>
            
        </div>

    </div>
    
  )
}

export default Footer