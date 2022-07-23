import React, { Fragment } from 'react';
import  {Link, useNavigate } from 'react-router-dom';
import "./nav.css"
import logo from './media/logo.png'
import shCart from './media/shopping-cart-3.png';
import logout from './media/logout.png';




function  Nav () {
  const sinUp=useNavigate();
  const sinIn=useNavigate();
   function bagg(){ 
    const bag=document.querySelector('.bag')
    bag.classList.add('.bagg')
  }
 function close(){
  const navg=document.querySelector('nav')
  const bar=document.getElementById('bar')
    const nav=document.getElementById('navbar');
      nav.classList.remove("active");
  navg.appendChild(bar)
  };

 function active(){
  const bar=document.getElementById('bar')
    const nav=document.getElementById('navbar');
     bar.remove()
      nav.classList.add("active");
  }
    return (
    <Fragment>
        <nav >
         <Link to=""><img src={logo}  className='logo' alt="" /></Link>
         <div>
          <ul id='navbar'>
            <li > <Link  to="/" id='home' className='active '>Home</Link></li>
            <li > <Link  to="/blog" id='blog'>Blog</Link></li>
            <li > <Link className='.shop' to="/shop" id='shop'>Shop</Link></li>
            <li > <Link to="/about" id='about'>About</Link></li>
            <li > <Link to="/contact" id='contact'>Conatct</Link></li>
            <li id='hide-bag' > <Link to="/cart" className='hide-bag' ><img src={shCart} alt=""className='far-fa-shopping-bag' /></Link></li>
            <Link to="" className='close' onClick={close} >
                <hr className='hr1' /><hr className='hr2' />
              </Link>
              {localStorage.getItem("connected")==="true"? 
              <button onClick={(e)=>localStorage.getItem("connected")==="false"? sinUp("/signIn"):e.preventDefault()}
               className='signIn'>{localStorage.getItem("username")}
                <span onClick={()=>{
                  localStorage.clear();
                  sinIn('/signIn')
                }} >
                  <img src={logout} alt="logo"  /></span>
                
                </button>
              :<button onClick={()=>sinUp("/signUp")} className='signUp'>sign In/Up</button>}
          </ul>
          </div>
          <div id="mobile">
            <li id='shopright' > <Link to="/cart"  ><img src={shCart} alt="cart"className='far-fa-shopping-bag' /></Link></li>
            <i id="bar" onClick={active}  ><div  className='far-fa-shopping-bag bar-hr '>
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
