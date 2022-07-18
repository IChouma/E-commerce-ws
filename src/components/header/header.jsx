import React, {Fragment } from 'react';

import "./header.css"


function  Header() {
    return (
    <Fragment>
       <header id='header' >
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save More with coupons & up to 70% off!</p>
        <button>Shop Now</button>
       </header>
    </Fragment>
    
  )
}


export default Header