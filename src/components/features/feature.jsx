import React, { Component,Fragment } from 'react';

import "./feature.css";
import f1 from "./media/f1.png"
import f2 from "./media/f2.png"
import f3 from "./media/f3.png"
import f4 from "./media/f4.png"
import f5 from "./media/f5.png"
import f6 from "./media/f6.png"

 
function  Feature(){
  const  state={feature:[
        {img:f1,shipping:"free shipping"},
        {img:f2,shipping:"free shipping"},
        {img:f3,shipping:"free shipping"},
        {img:f4,shipping:"free shipping"},
        {img:f5,shipping:"free shipping"},
        {img:f6,shipping:"free shipping"},
    ]}
  const feature=state.feature.map(function(feature){
  return (
         <div key={Math.random()} className='fe-box'>
             <img src={feature.img} alt="" />
             <h6>{feature.shipping}</h6>
         </div>
  )})

    return (
    <Fragment>
        <section className='section-p1'>
        {feature}
       </section>
    </Fragment>
    
  )
}

export default Feature