import React, { Fragment, useState } from 'react';
import  "./signUp.css";
import Nav from '../nav/nav'
import Footer from '../footer/footer'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';


function SignUp() {
    const signIn=useNavigate()
    const [state, setState]=useState();
        const username=useRef()
        const name=useRef()
        const mail=useRef()
        const password=useRef()
        const submit=(a,b,c,d)=>{
            localStorage.setItem("username",a)
            localStorage.setItem("name",b)
            localStorage.setItem("mail",c)
            localStorage.setItem("password",d)
             a=""
            b=""
            c=""
            d=""
           const  go=()=>{signIn('/signIn')}
            go()
        }
  return (
    <Fragment>
        <Nav/>
        <section id='signUp'>
            <h1>sign up</h1>
            <h3>Enter your information</h3>
            <div className="section-p">
                <input ref={username} type="text" placeholder='userName'/>
                <input ref={name} type="text" placeholder='name'/>
                <input ref={mail} type="mail" placeholder='xy@xyz.com'/>
                <input ref={password} type="password"  placeholder='password'/>
                <button
                onClick={()=>submit(username.current.value,name.current.value,mail.current.value,password.current.value)}
                >sign Up</button>
                <a href={"#signup"} onClick={()=>signIn('/signIn')}>have account ?  <span>sign in</span></a>
            </div>
        </section>
        <Footer/>
    </Fragment>
  )
}

export default SignUp
// localStorage.setItem("userName","ilham");
// const user=localStorage.getItem("user");
// // localStorage.clear()