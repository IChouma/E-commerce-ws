import "./shop.css"
import Nav from '../nav/nav'
import Footer from '../footer/footer'
import React, { Fragment,  } from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import  { cartt,selectCart} from "../../cart-slice";
import f1 from "./media/f1.jpg"
import f2 from "./media/f2.jpg"
import f3 from "./media/f3.jpg"
import f4 from "./media/f4.jpg"
import f5 from "./media/f5.jpg"
import star from "./media/star.png"
import n1 from "./media/f6.jpg"
import n2 from "./media/f7.jpg"
import n3 from "./media/f8.jpg"
import n4 from "./media/n8.jpg"
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

function Shop () {
const cartp = useSelector(selectCart);
  const dispatch = useDispatch();

   const states={
    fproducts:[
      {img:n1,brand:"adidas",pName:"Cartoon Astronaut T-Shirts",price:95},
      {img:n2,brand:"nike",pName:"Cartoon Astronaut T-Shirts",price:96},
      {img:n3,brand:"adidas",pName:"Cartoon Astronaut T-Shirts",price:95},
      {img:n4,brand:"nike",pName:"Cartoon Astronaut T-Shirts",price:96},
    ],
   cartProduct:[
  cartp
 ]
  };
  
 function  show4(){
const smallimg=document.querySelector('.small-img4')
const mainimg=document.querySelector('#mainimg')
mainimg.src=smallimg.src
    }
function   show1(){
const smallimg=document.querySelector('.small-img1')
const mainimg=document.querySelector('#mainimg')
mainimg.src=smallimg.src

    }
function   show2(){
const smallimg=document.querySelector('.small-img2')
const mainimg=document.querySelector('#mainimg')
mainimg.src=smallimg.src

    }
function   show3(){
const smallimg=document.querySelector('.small-img3')
const mainimg=document.querySelector('#mainimg')
mainimg.src=smallimg.src
    }
  useLayoutEffect(()=>{
    const home=document.querySelector('#home')
    const shop=document.querySelector('#shop')
    // shop.classList.add('active')
    // home.classList.remove('active');
  })


      const fproducts=states.fproducts.map((pd)=>{
        return (
           <div  key={Math.random()} className="pro">
                    <img src={pd.img} alt="" />
                    <div className='description'>
                        <span>{pd.brand}</span>
                        <h5>{pd.pName}</h5>
                        <div className='star'>
                        <i className='fas fa-star'><img src={star} alt="" /></i>
                        <i className='fas fa-star'><img src={star} alt="" /></i>
                        <i className='fas fa-star'><img src={star} alt="" /></i>
                        <i className='fas fa-star'><img src={star} alt="" /></i>
                        <i className='fas fa-star'><img src={star} alt="" /></i>
                        </div>
                    <h4>${pd.price}</h4>
                    </div>
                <button href="">Shop<i className='fal fa-shopping-cart'></i></button>
                </div>
        )
      });
    const cart=useNavigate();
       
      const cartproduct=states.cartProduct.map((cp)=>{ 
        if (cp!==0){
        return (
           <section key={Math.random()} id="prodetails" className="section-p1">
      <div className="sproimg">
        <img src={cp.img1} width="100%" alt="" id="mainimg"/>
        <div className="smallimgg">
          <div className="small-img-c">
            <img src={cp.img2} width="100%" className="small-img small-img1" alt="" onClick={show1} />
          </div>
          <div className="small-img-c">
            <img src={cp.img3} width="100%" className="small-img small-img2" alt="" onClick={show2}  />
          </div>
          <div className="small-img-c">
            <img src={cp.img4} width="100%" className="small-img small-img3" alt="" onClick={show3}  />
          </div>
          <div className="small-img-c">
            <img src={cp.img5} width="100%" className="small-img small-img4" alt="" onClick={show4} />
          </div>
        </div>
      </div>
      <div className="sprodetails">
        <h6>{cp.h6}</h6>
        <h4>{cp.h4}</h4>
        <h2>${cp.price}</h2>
        <select >
          <option >Select Size</option>
          <option >XL</option>
          <option >XXL</option>
          <option >Small</option>
          <option >Large</option>
        </select>
        <input type="number" defaultValue={"1"}  />
        <button key={Math.random()} onClick={()=>cart('/cart')} className="normal">Add To Cart</button>
        <h4>Products Details</h4>
        <span>{cp.span}</span>
      </div>
    </section>
        )}
        else{
          return <p className="npPro">You can shoose a product from home page!</p>
        }
      })
  return (
  <Fragment>
    <Nav />
   {cartproduct}
    <section id='section' className='section-p1'>
            <h2>Featured Products </h2>
            <p>Summer Collection New Modern Design </p>
            <div className="pro-container">
               {fproducts}
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

export default Shop;

