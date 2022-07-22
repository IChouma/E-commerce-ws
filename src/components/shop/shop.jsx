import React, { Fragment,  } from 'react';
import "./shop.css"
import Nav from '../nav/nav'
import Footer from '../footer/footer'
import { useSelector } from 'react-redux';
import  { selectCart} from "../../cart-slice";
import star from "./media/star.png"
import n1 from "./media/f6.jpg"
import n2 from "./media/f7.jpg"
import n3 from "./media/f8.jpg"
import n4 from "./media/n8.jpg"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

localStorage.getItem("connected","false");

function Shop () {
  useEffect(() => {
       let home=document.getElementById('home')
    let shop=document.getElementById('shop')
    shop.classList.add('active')
    home.classList.remove('active')
  });
const cartp = useSelector(selectCart);
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
  
 function  show(x){
const mainimg=document.querySelector('#mainimg')
mainimg.src=x.currentTarget.src
    }

const signIn=useNavigate();
const cart=useNavigate();

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
       
      const cartproduct=states.cartProduct.map((cp)=>{ 
        if (cp!==0){
        return (
           <section key={Math.random()**2} id="prodetails" className="section-p1">
      <div className="sproimg">
        <img src={cp.img1} width="100%" alt="" id="mainimg"/>
        <div className="smallimgg">
          <div className="small-img-c">
            <img src={cp.img2} width="100%" className="small-img small-img1" alt="" onClick={(e)=>show(e)} />
          </div>
          <div className="small-img-c">
            <img src={cp.img3} width="100%" className="small-img small-img2" alt="" onClick={(e)=>show(e)}  />
          </div>
          <div className="small-img-c">
            <img src={cp.img4} width="100%" className="small-img small-img3" alt="" onClick={(e)=>show(e)} />
          </div>
          <div className="small-img-c">
            <img src={cp.img5} width="100%" className="small-img small-img4" alt="" onClick={(e)=>show(e)} />
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
        <button key={Math.random()} 
         onClick={()=>localStorage.getItem("connected")=="true"?cart('/cart'):signIn("/signIn")} 
        className="normal">Add To Cart</button>
        <h4>Products Details</h4>
        <span>{cp.span}</span>
      </div>
    </section>
        )}
        else{
          return <p key={Math.random()} className="npPro">You can shoose a product from home page!</p>
        }
      })
      ;


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

