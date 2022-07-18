import React, { Component,Fragment } from 'react';
import  {Link } from 'react-router-dom';

import "./nav.css"
import logo from './media/logo.png'
import shCart from './media/shopping-cart-3.png'


function  Nav () {
   function bagg(){ 
    const bag=document.querySelector('.bag')
    bag.classList.add('.bagg')
  }
 function close(){
    const close=document.getElementById('close');
    const nav=document.getElementById('navbar');
      nav.classList.remove("active");

  };

 function active(){
    const bar=document.getElementById('bar');
    const nav=document.getElementById('navbar');
      nav.classList.add("active");
  }
  
    return (
    <Fragment>
        <nav >
         <Link to=""><img src={logo}  className='logo' alt="" /></Link>
         <div>
          <ul id='navbar'>
            <li > <Link to="/" id='home' className='active '>Home</Link></li>
            <li > <Link to="/blog" id='blog'>Blog</Link></li>
            <li > <Link to="/shop" id='blog'>Shop</Link></li>
            <li > <Link to="/about" id='about'>About</Link></li>
            <li > <Link to="/contact" id='contact'>Conatct</Link></li>
            <li id='hide-bag' > <Link to="/cart" className='hide-bag' ><img src={shCart} alt=""className='far-fa-shopping-bag' /></Link></li>
            <Link to="" className='close' onClick={close} >
                <hr className='hr1' /><hr className='hr2' />
              </Link>
          </ul>
          </div>
          <div id="mobile">
            <li > <Link to="/cart"  ><img src={shCart} alt=""className='far-fa-shopping-bag' /></Link></li>
            <i id="bar" onClick={active} ><div  className='far-fa-shopping-bag bar-hr '>
              <hr />
              <hr />
              <hr />
              </div></i>
          </div>
        </nav>
    </Fragment>
    
  )

}

export default Nav
