import React, {useEffect, Fragment, useRef, useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import  {shopiCart,shoppCart } from '../../shpc-slice';
import "./cart.css"
import Nav from '../nav/nav'
import Footer from '../footer/footer'
import f1 from "./media/f1.jpg"
import f2 from "./media/f2.jpg"
import f7 from "./media/f7.jpg"
import f3 from "./media/f7.jpg"
import f4 from "./media/f7.jpg"
import f5 from "./media/f7.jpg"
import { useNavigate } from 'react-router-dom';


function Cart () {
const usdispatch=useDispatch();
const shopCart=useSelector(shoppCart);
const cart=useNavigate()
const state={
  shopCart:[
         {name:"ilhamatiiii",brand:"adidas",img1:f1,price:25,h6:"Home / B-Shirts",h4:"Men's Fasion T Shirts",h4:"Men's Fasion T Shirts",span:" dolores beatae maxime? Dignissimos beatae velit commodi maxime?",quantity:1,},
         {name:"ilhamatiiii",brand:"adidas",img1:f2,price:65,h6:"Home / B-Shirts",h4:"Men's Fasion T Shirts",h4:"Men's Fasion T Shirts",span:" dolores beatae maxime? Dignissimos beatae velit commodi maxime?",quantity:1,},
         {name:"ilhamatiiii",brand:"adidas",img1:f3,price:108,h6:"Home / B-Shirts",h4:"Men's Fasion T Shirts",h4:"Men's Fasion T Shirts",span:" dolores beatae maxime? Dignissimos beatae velit commodi maxime?",quantity:1,},
    
  ]
};
const tol=[]
const toTal=state.shopCart.map(function(e,index){
   tol.push((Number(localStorage.getItem(`qt-${index}`)))*e.price);
   return tol
});
const totl=tol.reduce((e,c)=>e+c)
console.log(totl)
const gocart=function(){
  return cart('/cart')
}
const shCart=state.shopCart.map((pro,index)=>{
let tot=document.querySelector(".totalp");
  if(shopCart!==shopCart[0]){
  return(
    <tr key={Math.random()}>
          <td><a href=""><i className="far fa-times-cercle">A</i></a></td>
          <td><img src={pro.img1} alt="" /></td>
          <td>{pro.name}</td>
          <td>${pro.price}</td>
          <td><input type="number" className='quantity' 
          onChange={(e)=>{setInterval(() => {e.target.value>=0?localStorage.setItem(`qt-${index}`,e.target.value):localStorage.setItem(`qt-${0}`) }, 300)
          ;gocart()}}
            defaultValue={localStorage.getItem(`qt-${index}`)} /></td>
          <td className='totalp'>${pro.price*localStorage.getItem(`qt-${index}`)}</td>
        </tr>
  )}
  else{
    return null
  }

})
  useEffect(()=>{
    const home=document.querySelector('#home')
    const cart=document.querySelector('.hide-bag')
    home.classList.remove('active')
    cart .classList.add('active')
  });
  
  return (
  <Fragment>
    <Nav />
      <header  className="about-header cart-header" >
        <h2 >let'_stalk</h2>
        <p>I love you ilhamti i love you so much!</p>
       </header>
   <section id="cart"  >
    <table>
      <thead>
        <tr>
          <td>Remove</td>
          <td>Image</td>
          <td>Products</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Subtotal</td>
        </tr>
      </thead>
      <tbody>
        {shCart}
     
      </tbody>
    </table>
   </section>
   <section id="cart-add" className="section-p1">
    <div id="coupon">
      <h3>Apply Coupons</h3>
      <div> 
        <input type="text" placeholder="Enter Yiur Coupon" />
        <button className="normal">Apply</button>
      </div>
    </div>
    <div id="subtotal">
      <h3>Cart Total</h3>
      <table>
        <tbody>
        <tr>
          <td>Cart subtotal</td>
          <td>${totl}</td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td>Free</td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td>$ {totl}</td>
        </tr>
        </tbody>
      </table>
      <button className="normal">Proced to checkout</button>
    </div>
   </section>
   
   
    <Footer/>
  </Fragment>
  )

}

export default Cart;

