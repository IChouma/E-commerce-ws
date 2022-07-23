import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import  { cartt} from "../../cart-slice";
import "./fproducts.css";
import f1 from "./media/f1.jpg"
import f2 from "./media/f2.jpg"
import f3 from "./media/f3.jpg"
import f4 from "./media/f4.jpg"
import f5 from "./media/f5.jpg"
import f6 from "./media/f6.jpg"
import f7 from "./media/f7.jpg"
import f8 from "./media/f8.jpg"
import n1 from "./media/n1.jpg"
import n2 from "./media/n2.jpg"
import n3 from "./media/n3.jpg"
import n4 from "./media/n4.jpg"
import n5 from "./media/n5.jpg"
import n6 from "./media/n6.jpg"
import n7 from "./media/n7.jpg"
import n8 from "./media/n8.jpg"
import star from "./media/star.png"

function  FProducts() {
    const dispatch=useDispatch();
    const cart=useNavigate();
 const  state={
    name:"ilhamaaaa",
    products:[
         {name:" Product-x",brand:"adidas",img1:f1,img2:f2,img3:f3,img4:f4,img5:f5,price:95,h6:"Home / B-Shirts",h4:"Men's Fasion T Shirts",span:" dolores beatae maxime? Dignissimos beatae velit commodi maxime?",},
         {name:" Product-x",brand:"adidas",img1:f2,img2:f3,img3:f4,img4:f5,img5:f6,price:96,h6:"Home / B-Shirts",h4:"Men's Fasion T Shirts",span:" dolores beatae maxime? Dignissimos beatae velit commodi maxime?",},
         {name:" Product-x",brand:"adidas",img1:f3,img2:f4,img3:f5,img4:f6,img5:f7,price:97,h6:"Home / B-Shirts",h4:"Men's Fasion T Shirts",span:" dolores beatae maxime? Dignissimos beatae velit commodi maxime?",},
         {name:" Product-x",brand:"adidas",img1:n1,img2:n2,img3:n3,img4:n4,img5:n5,price:98,h6:"Home / B-Shirts",h4:"Men's Fasion T Shirts",span:" dolores beatae maxime? Dignissimos beatae velit commodi maxime?",},
         {name:" Product-x",brand:"adidas",img1:n6,img2:n7,img3:n8,img4:f1,img5:f2,price:94,h6:"Home / B-Shirts",h4:"Men's Fasion T Shirts",span:" dolores beatae maxime? Dignissimos beatae velit commodi maxime?",},
         {name:" Product-x",brand:"adidas",img1:f6,img2:f1,img3:f1,img4:f1,img5:f4,price:93,h6:"Home / B-Shirts",h4:"Men's Fasion T Shirts",span:" dolores beatae maxime? Dignissimos beatae velit commodi maxime?",},
         {name:" Product-x",brand:"adidas",img1:f7,img2:f7,img3:f1,img4:f1,img5:f4,price:92,h6:"Home / B-Shirts",h4:"Men's Fasion T Shirts",span:" dolores beatae maxime? Dignissimos beatae velit commodi maxime?",},
         {name:" Product-x",brand:"adidas",img1:f8,img2:f8,img3:f1,img4:f1,img5:f4,price:91,h6:"Home / B-Shirts",h4:"Men's Fasion T Shirts",span:" dolores beatae maxime? Dignissimos beatae velit commodi maxime?",},

    ]
   
    };
      const pro=state.products.map(function(pro){
  return (
                    <Link to="/shop" key={Math.random()}><div onClick={()=>dispatch(cartt(pro))}   className="pro">
                    <img   src={pro.img1} alt="" />
                    <div className='description'>
                        <span>{pro.name}</span>
                        <h5 >{pro.name}</h5>
                        <div className='star'>
                        <i className='fas fa-star'><img src={star} alt="" /></i>
                        <i className='fas fa-star'><img src={star} alt="" /></i>
                        <i className='fas fa-star'><img src={star} alt="" /></i>
                        <i className='fas fa-star'><img src={star} alt="" /></i>
                        <i className='fas fa-star'><img src={star} alt="" /></i>
                        </div>
                    <h4>${pro.price}</h4>
                    </div>
                <button onClick={()=>cart('/cart')}>Shop<i className='fal fa-shopping-cart'></i></button>
                </div>
                </Link>

  )
   });
    return (
    <Fragment>
        <section id='section' className='section-p1'>
            <h2 >Featured Products</h2>
            <p>Summer Collection New Modern Design</p>
            <div className="pro-container">
                {pro}
            </div>
        </section>
    </Fragment>
    
  )
}


export default FProducts