import React, { Component,Fragment } from 'react';

import "./banner.css";

class Banner extends Component{
    render(){
        return(
            <Fragment>
                <section className='section-m1' id="banner">
                    <h4>Rapier Services</h4>
                    <h2>Up to  <span>70% off</span>  - All t-shirts & Accessoires</h2>
                    <button className='normal'>Explore More</button>
                </section>
            </Fragment>
        )
    }
}
export default Banner