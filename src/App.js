import './App.css';
import  { BrowserRouter,Route,Routes } from 'react-router-dom';
import React from 'react';
 import { Provider } from 'react-redux';
import store from "./store";
import Home from './components/home/home'
import Shop from './components/shop/shop'
import Blog from './components/blog/blog'
import About from './components/about/about'
import Contact from './components/contact/contact'
import SignUp from './components/signUp/signUp'
import Cart from './components/cart-page/cart'
import SignIn from './components/signIn/signIn'
import Payment from './components/payment/payment';



function App() {
  return (
<Provider store={store}>
    <BrowserRouter>
    <Routes>
     <Route exact path="/" element={<Home/>} />
     <Route  path="/:home" element={<Home />} />
     <Route path="/shop" element={<Shop/>}/>
     <Route  path="/blog"   element={<Blog/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/cart"  element={<Cart/>}/>
     <Route path="/cart"  element={<Cart/>}/>
     <Route path="payment"  element={<Payment/>}/>
     <Route path="/signUp"  element={<SignUp/>}/>
     <Route path="/signIn"  element={<SignIn/>}/>
    </Routes>
  </BrowserRouter>
    </Provider>
  )
}

export default App;

