import React, { Component,Fragment } from 'react';

import "./fproducts2.css";
import n1 from "./media/n1.jpg"
import n2 from "./media/n2.jpg"
import n3 from "./media/n3.jpg"
import n4 from "./media/n4.jpg"
import n5 from "./media/n5.jpg"
import n6 from "./media/n6.jpg"
import n7 from "./media/n7.jpg"
import n8 from "./media/n8.jpg"
import star from "./media/star.png"



 
class  FProducts2 extends Component {
     state={
    name:"ilhamaaaa",
    products:[
         {name:"ilhamatiiii",brand:"adidas",img:n1,price:95,},
         {name:"ilhamatiiii",brand:"adidas",img:n2,price:95,},
         {name:"ilhamatiiii",brand:"adidas",img:n3,price:95,},
         {name:"ilhamatiiii",brand:"adidas",img:n4,price:95,},
         {name:"ilhamatiiii",brand:"adidas",img:n5,price:95,},
         {name:"ilhamatiiii",brand:"adidas",img:n6,price:95,},
         {name:"ilhamatiiii",brand:"adidas",img:n7,price:95,},
         {name:"ilhamatiiii",brand:"adidas",img:n8,price:95,},
    ]
    }
  render(){
  const pro=this.state.products.map(function(pro){
  return (
    
                    <div key={pro.img} className="pro">
                    <img src={pro.img} alt="" />
                    <div className='description'>
                        <span>{pro.name}</span>
                        <h5>{pro.name}</h5>
                        <div className='star'>
                        <i className='fas fa-star'><img src={star} alt="" /></i>
                        <i className='fas fa-star'><img src={star} alt="" /></i>
                        <i className='fas fa-star'><img src={star} alt="" /></i>
                        <i className='fas fa-star'><img src={star} alt="" /></i>
                        <i className='fas fa-star'><img src={star} alt="" /></i>
                        </div>
                    <h4>${pro.price}</h4>
                    </div>
                <a href="">Shop<i className='fal fa-shopping-cart'></i></a>
                </div>

  )
   })
    return (
    <Fragment>
        <section id='section' className='section-p1'>
            <h2>New Arrivals</h2>
            <p>Summer Collection New Modern Design</p>
            <div className="pro-container">
               {pro} 
               
            </div>
        </section>
    </Fragment>
    
  )
}

}

export default FProducts2