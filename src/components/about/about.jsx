import "./about.css"
import Nav from '../nav/nav'
import Footer from '../footer/footer'
import Feature from '../features/feature'
import React, { Fragment, useEffect } from 'react';
import a6 from "./media/a6.jpg"
import video1 from "./media/1.mp4"



function About() {

 useEffect(()=>{ 
    const home=document.querySelector('#home')
    const about=document.querySelector('#about')
    about.classList.add('active')
    home.classList.remove('active')
    
  },[])
  return (
  <Fragment>
    <Nav />
      <header className="about-header" >
        <h2>#knowus</h2>
        <p>I love you ilhamti i love you so much!</p>
       </header>
      <section id="about-header" className="section-p1">
        <img src={a6} alt="" />
        <div>
            <h2>Who We are?</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, voluptate possimus nobis
             molestiae odit maiores! Error, nam quos totam,
             iste explicabo ducimus earum, harum dolorem cumque molestiae ex optio dignissimos?
             </p>
             <abbr title="">Create Stuning images with as much or as little control as you 
             like thanks to a choice of Basic and Creative modes.</abbr>
             <br /><br />
             <marquee bgcolor="#ccc" loop="-1" scrollamount="7" width="100%" behavior="" direction="">Create Stuning images with as much or as little control as you 
             like thanks to a choice of Basic and Creative modes.</marquee>
        </div>
      </section>
      <section id="about-app"  className="section-p1 ">
        <h1>Download Our <a href="#about-headr">App</a></h1>
        <div className="video"><video autoPlay  src={video1}></video></div>
      </section>
      <Feature/>
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



export default About;

