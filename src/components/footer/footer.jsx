import React, { Component,Fragment } from 'react';

import "./footer.css"

import logo from "./media/logo.png"
import app from "./media/app.jpg"
import play from "./media/play.jpg"
import pay from "./media/pay.png"
import twitter from "./media/twitter-square-brands.svg"
import facebook from "./media/facebook-brands.svg"
import linkedin from "./media/linkedin-brands.svg"
import youtube from "./media/youtube-square-brands.svg"
import instagram from "./media/instagram-brands.svg"

function  Footer() {
    return (
    <Fragment>
      <footer id='footer' className='section-p1'>
            <div className="col">
                <img src={logo} alt="" className='logo'/>
                <h4>Contact</h4>
                <p><strong>Adress:</strong> 562 wellington Road, Street 32, San Francisco</p>
                <p><strong>Phone:</strong> +212 661 771 140</p>
                <p><strong>Hours:</strong>10:00 - 18:00, Mon -Sat </p>
                <div className="follow">
                    <h4>Fellow us</h4>
                    <div className="icon">
                        <i><img src={twitter} alt="image" /></i>
                        <i><img src={linkedin} alt="image" /></i>
                        <i><img src={facebook} alt="image" /></i>
                        <i><img src={youtube} alt="image" /></i>
                        <i><img src={instagram} alt="image" /></i>
                    </div>
                </div>
            </div>
            <div className="col">
                <h4>About</h4>
                <a href="#footer">About us</a>
                <a href="#footer">Dilevery Information</a>
                <a href="#footer">Privacy Policy</a>
                <a href="#footer">Terms & Conditions</a>
                <a href="#footer">Contact us</a>
            </div>
            <div className="col">
                <h4>My Account</h4>
                <a href="/signIn">Sign in</a>
                <a href="/cart">View Cart</a>
                <a href="footer#">My Wishlist</a>
                <a href="#footer">Track My order</a>
                <a href="#footer">Help</a>
            </div>
            <div className="col install">
                <h4>Install App</h4>
              <p>From App Store or Google Play</p>
              <div className="row">
                <img src={app} alt="" />
                <img src={play} alt="" />
              <p>Secured Payment Gateways</p>
                <img src={pay} alt="" />
              </div>
            </div>
            <div className="copy">
                <p> &copy; 2021, Tech ect - HTML CSS Ecommerce Template</p>
            </div>
      </footer>
    </Fragment>
    
  )
}


export default Footer