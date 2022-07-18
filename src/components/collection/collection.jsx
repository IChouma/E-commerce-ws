import React, { Component,Fragment } from 'react';

import "./collection.css";
import img from "../../images/feed-image-2.png"


 
function  Collection() {
    return (
        <Fragment>
        <section id='sm-banner' className='section-p1'>
            <div className="banner-box">
                <h4>creazy deals</h4>
                <h2> buy 1 get 1 free</h2>
                <span>The best classic dress is non sale at ilham</span>
                <button className='white'>Learn More</button>
            </div>
            <div className="banner-box banner-box2">
                <h4>creazy deals</h4>
                <h2> buy 1 get 1 free</h2>
                <span>The best classic dress is non sale at ilham</span>
                <button className='white'>Learn More</button>
            </div>
        </section>
        <section id='banner3'>
            <div className="banner-box ">
                <h2>SEASONAL SALE</h2>
                <h3>Winter Collection -50% OFF</h3>
            </div>
            <div className="banner-box">
                <h2>SEASONAL SALE</h2>
                <h3>Winter Collection -50% OFF</h3>
            </div>
            <div className="banner-box">
                <h2>SEASONAL SALE</h2>
                <h3>Winter Collection -50% OFF</h3>
            </div>
        </section>
        <section id="newslatter" className='section-p1 section-m1'>
            <div className="newstext">
                <h4>Sign Up For Newslatters</h4>
                <p>Get E-mail updates about our latest shop and <span>special offfers</span>.</p>
            </div>
            <div className="form">
                <input type="text" placeholder='Your email adress' />
                <button className='normal'>Sign Up</button>
            </div>
        </section>
        </Fragment>
    )
}
export default Collection