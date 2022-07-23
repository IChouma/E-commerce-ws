import React, {useEffect, Fragment, useRef } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import  {paid, selectCart,} from "../../cart-slice";
import  {shoppCart } from '../../shpc-slice';

import "./cart.css"
import Nav from '../nav/nav'
import Footer from '../footer/footer'
import f1 from "./media/f1.jpg"
import f2 from "./media/f2.jpg"
import f3 from "./media/f7.jpg"
import { useNavigate ,} from 'react-router-dom';


function Cart () {
const shopCart=useSelector(shoppCart);
const payment=useNavigate()
const cart=useNavigate()
const input=useRef();
const cbox=useRef();
const dispatch=useDispatch();
const state={
  shopCart:[
         {name:"Cartoon Astronaut T-Shirts",brand:"adidas",img1:f1,price:25,h6:"Home / B-Shirts",h4:"Men's Fasion T Shirts",span:" dolores beatae maxime? Dignissimos beatae velit commodi maxime?",quantity:1,},
         {name:"Cartoon Astronaut T-Shirts",brand:"adidas",img1:f2,price:65,h6:"Home / B-Shirts",h4:"Men's Fasion T Shirts",span:" dolores beatae maxime? Dignissimos beatae velit commodi maxime?",quantity:1,},
         {name:"Cartoon Astronaut T-Shirts",brand:"adidas",img1:f3,price:108,h6:"Home / B-Shirts",h4:"Men's Fasion T Shirts",span:" dolores beatae maxime? Dignissimos beatae velit commodi maxime?",quantity:1,},
    
  ]
};
const tol=[]
state.shopCart.map(function(e,index){
  if(localStorage.getItem(`checked-${index}`)){
    tol.push((Number(localStorage.getItem(`qt-${index}`)))*e.price)
  }
  
   return tol
});
const totl=tol.reduce((e,c)=>e+c,0)
const gocart=function(){
  return cart('/cart')
};

useEffect(() => {

   const cbox=document.querySelectorAll(`.checked`);
     for (let i = 0; i < cbox.length; i++) {
      if(localStorage.getItem(`checked-${i}`)){
        cbox[i].setAttribute("checked","")
      }
     }
});

const shCart=state.shopCart.map((pro,index)=>{
  if(shopCart!==shopCart[0]){
    return(
    <tr key={Math.random()}>
          <td><input ref={cbox} className={"checked"}  type="checkbox"
          readOnly

          onClick={function(e){
            e.target.hasAttribute("checked")?
            e.target.removeAttribute("checked")
            :e.target.setAttribute("checked","");
            localStorage.getItem(`checked-${index}`)?
            localStorage.removeItem(`checked-${index}`):
            localStorage.setItem(`checked-${index}`,`check-${index}`);
            localStorage.getItem(`checked-${index}`)
            ? e.target.setAttribute("checked","")
            :e.target.removeAttribute("checked","");
            gocart()
          }
          } 
            /></td>
          <td><img src={pro.img1} alt="" /></td>
          <td>{pro.name}</td>
          <td>${pro.price}</td>
          <td className="c-quant">
            <button 
            onClick={function(){
             pro.quantity=localStorage.getItem(`qt-${index}`);
             pro.quantity=Number(pro.quantity)-1;
             if(pro.quantity>=0)
             {localStorage.setItem(`qt-${index}`,pro.quantity)};
             gocart()

            }} >-</button>
            <input ref={input} type="text" defaultValue={localStorage.getItem(`qt-${index}`)>0?localStorage.getItem(`qt-${index}`):0}/>
            <button  
            onClick={function(){
              pro.quantity=localStorage.getItem(`qt-${index}`);
              pro.quantity=Number(pro.quantity)+1;
              if(pro.quantity>=0)
             {localStorage.setItem(`qt-${index}`,pro.quantity);}
             gocart()

            }}>+</button>
            </td>
            
          <td className='totalp'>$ {localStorage.getItem(`qt-${index}`)>=0?pro.price*localStorage.getItem(`qt-${index}`):0}</td>
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
    cart.classList.add('active')
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
        <tr key={Math.random()}>
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
        <input type="text" placeholder="Enter Your Coupon" />
        <button className="normal">Apply</button>
      </div>
    </div>
    <div id="subtotal">
      <h3>Cart Total</h3>
      <table>
        <tbody>
        <tr>
          <td>Cart subtotal</td>
          <td>${totl>=0?totl:0}</td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td>Free</td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td>$ {totl>=0?totl:0}</td>
        </tr>
        </tbody>
      </table>
      <button 
      onClick={function(){payment("/payment")
      dispatch(paid(totl))
    }}
       className="normal">Proced to checkout</button>
    </div>
   </section>
   
   
    <Footer/>
  </Fragment>
  )

}

export default Cart;

