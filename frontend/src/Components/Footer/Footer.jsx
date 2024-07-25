import React from 'react'
import './Footer.css'
import {FaFacebook,FaInstagram,FaTwitter,FaYoutube,FaPinterest} from 'react-icons/fa'
const Footer = () => {
  return (

    <div className='footer-main'>
        <div className="footer">
            <div className="footer-left">
                <h1>Watch Haven</h1>
                <div className="footer-socialmedia">

                    <FaFacebook/> <FaInstagram/> <FaTwitter/> <FaYoutube/> <FaPinterest/>
                </div>
                <p>© Copyright 2024 Watch Haven All Rights Reserved. Powered by <a href="https://www.linkedin.com/in/amruth-shyju/">Amruth Shyju</a> </p>
            </div>
            <div className="footer-mid">
                <h3>About Us</h3>
                <p>Designed for life in the fast lane, speed up your daily performance with the Watch Haven range. Utilizing advanced technology these high power timepieces push boundaries with unrivalled innovative features, cutting edge materials and stylish aesthetics.</p>
            
            </div>
            <div className="footer-right">
                <div className="f-one">
                <a href="">Home</a> <br />
                <a href="">About</a> <br />
                <a href="">Shop</a> <br />
                <a href="">Cart</a>
                </div>
                <div className="f-two">
                    <a href="">Login</a> <br />
                    <a href="">SingUp</a> <br />
                    <a href="">Contact</a>
                </div>
            </div>
    </div>
    </div>
  )
}

export default Footer