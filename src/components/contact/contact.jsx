import "./contact.css"
import Nav from '../nav/nav'
import Footer from '../footer/footer'
import Feature from '../features/feature'
import React, { Component, Fragment } from 'react';
import c1 from "./media/c1.png"
import c2 from "./media/c2.png"
import c3 from "./media/c3.png"
import img1 from "./media/map.png"



class Contact extends Component {
 componentDidMount(){ 
    const home=document.querySelector('#home')
    const contact=document.querySelector('#contact')
    contact.classList.add('active')
    home.classList.remove('active')
}
render(){
   
  return (
  <Fragment>
    <Nav />
      <header className="about-header contact-header" >
        <h2>#let's_talk</h2>
        <p>I love you ilhamti i love you so much!</p>
       </header>
    <section className="section-p1" id="contact-det" >
      <div className="details">
        <span>GET IN TOUCH</span>
        <h2>visit one of our agency locatios or contact us today</h2>
        <h3>Head Office</h3>
        <div>
          <li>
            <i className="fal fa-map">A</i>
            <p>95 Glassford Street Glasgow GI 1UL New Taza</p>
          </li>
                    <li>
            <i className="fal fa-map">C</i>
            <p>iiicii@outlook.com</p>
          </li>
          <li>
            <i className="fal fa-map">B</i>
            <p>abdeljabarichouma@gmail.com</p>
          </li>

          <li>
            <i className="fal fa-map">D</i>
            <p>Monday to Saturday 9:00 Am to 16:00 Pm</p>
          </li>
        </div>
      </div>
      <div className="map">
        <img src={img1} alt="" />
      </div>
    </section>
    <section id="form-detel">
      <form action="">
        <span>LEAVE A MESSAGE</span>
        <h2>love to hear from you</h2>
        <input type="text" placeholder="You Name" />
        <input type="eamil" placeholder="E-mail" />
        <input type="text" placeholder="Subject" />
        <textarea name="" id="" cols="30" rows="10" placeholder="Your Messsage"></textarea>
        <button className="normal">Submit</button>
      </form>
      <div className="people">
        <div>
          <img src={c1} alt="" />
          <p><span>Ilham Elqadmi</span>senior Marketing Manger <br /> Phone:00212 661 771 140 <br />iiicii@outlook.com</p>
        </div>
        <div>
          <img src={c2} alt="" />
          <p><span>Ilham Elqadmi</span>senior Marketing Manger <br />Phone:00212 661 771 140 <br />iiicii@outlook.com</p>
        </div>
        <div>
          <img src={c3} alt="" />
          <p><span>Ilham Elqadmi</span>senior Marketing Manger <br />Phone:00212 661 771 140 <br />iiicii@outlook.com</p>
        </div>
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
   
    <Footer/>
  </Fragment>
  )
}
}



export default Contact;

