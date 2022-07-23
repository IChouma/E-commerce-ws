import React, { Fragment } from 'react';
import  "./signIn.css";

import Nav from '../nav/nav'

import Footer from '../footer/footer'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';


function SignIn() {
  const signUp=useNavigate();
  const home=useNavigate();
  const signIn=useNavigate();
  const mail=useRef()
  const password=useRef()
  const check=(a,b)=>{
    a===localStorage.getItem("mail")&& b===localStorage.getItem("password")?home('/home'):signIn('/signIn');
    localStorage.setItem("connected","true")
  }
  return (
 <Fragment>
         <Nav/>
        <section id='signin'>
            <h1>sign in</h1>
            <h3>Enter your information</h3>
            <div className="section-p">
                <input ref={mail} type="mail" placeholder='xy@xyz.com'/>
                <input ref={password} type="password" placeholder='password' />
                <button onClick={()=>check(mail.current.value,password.current.value)}>sign In</button>
                <a href={"#signin"} onClick={()=>signUp('/signUp')}>Create account</a>
            </div>
        </section>
        <Footer/>
 </Fragment>
  )
}

export default SignIn
