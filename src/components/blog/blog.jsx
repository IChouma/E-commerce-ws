import "./blog.css"
import Nav from '../nav/nav'
import Footer from '../footer/footer'
import React, { Component, Fragment, useEffect } from 'react';
import b1 from "./media/b1.jpg"
import b7 from "./media/b7.jpg"
import b2 from "./media/b2.jpg"
import b3 from "./media/b3.jpg"
import b4 from "./media/b4.jpg"
import b5 from "./media/b5.jpg"
import b6 from "./media/b6.jpg"
import arrow from "./media/arrow.png"

function Blog(){
useEffect(()=>{
        const home=document.querySelector('#home')
    const blog=document.querySelector('#blog')
    blog.classList.add('active')
    home.classList.remove('active')
})


  return (
  <Fragment>
    <Nav />
      <header className="blog-header" >
        <h2>#readmore</h2>
        <p>Read all case studies about our products!</p>
       </header>
       <section id="blogsec">
        <div className="blog-box">
            <div className="blogimg">
                <img src={b1} alt="" />
            </div>
            <div className="blog-details">
                <h4>The Cotton-Jersy Zip-Up Hoodie</h4>
                <p>ilhamati i love you so much and want to be with you from bottom of my heart
                    ilhamati i love you so much and want to be with you from bottom of my heart
                </p>
                <a href="#">CONTINUE READING</a>
            </div>
            <h1>13/01</h1>
        </div>
        <div className="blog-box">
            <div className="blogimg">
                <img src={b2} alt="" />
            </div>
            <div className="blog-details">
                <h4>The Cotton-Jersy Zip-Up Hoodie</h4>
                <p>ilhamati i love you so much and want to be with you from bottom of my heart
                    ilhamati i love you so much and want to be with you from bottom of my heart
                </p>
                <a href="#">CONTINUE READING</a>
            </div>
            <h1>13/01</h1>
        </div>
        <div className="blog-box">
            <div className="blogimg">
                <img src={b3} alt="" />
            </div>
            <div className="blog-details">
                <h4>The Cotton-Jersy Zip-Up Hoodie</h4>
                <p>ilhamati i love you so much and want to be with you from bottom of my heart
                    ilhamati i love you so much and want to be with you from bottom of my heart
                </p>
                <a href="#">CONTINUE READING</a>
            </div>
            <h1>13/01</h1>
        </div>
        <div className="blog-box">
            <div className="blogimg">
                <img src={b4} alt="" />
            </div>
            <div className="blog-details">
                <h4>The Cotton-Jersy Zip-Up Hoodie</h4>
                <p>ilhamati i love you so much and want to be with you from bottom of my heart
                    ilhamati i love you so much and want to be with you from bottom of my heart
                </p>
                <a href="#">CONTINUE READING</a>
            </div>
            <h1>13/01</h1>
        </div>
        <div className="blog-box">
            <div className="blogimg">
                <img src={b5} alt="" />
            </div>
            <div className="blog-details">
                <h4>The Cotton-Jersy Zip-Up Hoodie</h4>
                <p>ilhamati i love you so much and want to be with you from bottom of my heart
                    ilhamati i love you so much and want to be with you from bottom of my heart
                </p>
                <a href="#">CONTINUE READING</a>
            </div>
            <h1>13/01</h1>
        </div>
        <div className="blog-box">
            <div className="blogimg">
                <img src={b6} alt="" />
            </div>
            <div className="blog-details">
                <h4>The Cotton-Jersy Zip-Up Hoodie</h4>
                <p>ilhamati i love you so much and want to be with you from bottom of my heart
                    ilhamati i love you so much and want to be with you from bottom of my heart
                </p>
                <a href="#">CONTINUE READING</a>
            </div>
            <h1>13/01</h1>
        </div>
        <div className="blog-box">
            <div className="blogimg">
                <img src={b7} alt="" />
            </div>
            <div className="blog-details">
                <h4>The Cotton-Jersy Zip-Up Hoodie</h4>
                <p>ilhamati i love you so much and want to be with you from bottom of my heart
                    ilhamati i love you so much and want to be with you from bottom of my heart
                </p>
                <a href="#">CONTINUE READING</a>
            </div>
            <h1>13/01</h1>
        </div>
       </section>
    <section id="pagination" className="section-p1">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#"><img src={arrow} alt="" /></a>
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
    <Footer/>
  </Fragment>
  )
}



export default Blog;

