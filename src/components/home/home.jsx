import Nav from '../nav/nav'
import Header from '../header/header'
import Feature from '../features/feature'
import FProducts from '../f-products/fproducts'
import FProducts2 from '../f-products-2/fproducts2'
import Collection from '../collection/collection'
import Banner from '../banner/banner'
import Footer from '../footer/footer'
import React, { Fragment } from 'react';


function Home() {
  return (
  <Fragment>
    <Nav/>
    <Header/>
    <Feature/>
    <FProducts/>
    <Banner/>
    <FProducts2/>
    <Collection/>
    <Footer/>
  </Fragment>
  )
}

export default Home;

