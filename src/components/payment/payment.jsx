import React, { Fragment } from 'react';
import  "./payment.css";
import Nav from '../nav/nav'
import Footer from '../footer/footer'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  { selectCart,} from "../../cart-slice";
import pay from "./pay.png"

function Payment() {
const paids=useSelector(selectCart)
console.log(paids)
  return (
    <Fragment>
        <Nav/>
        <section id='payment'>
            <h1>payment </h1>
            <h3>Total Amount is: <span>$ {paids}</span> </h3>
            <div className="section-p">
                <div className='userinfo'>
                    <input type="text" name='username' placeholder='username' />
                    <input type="text" name='name' placeholder='name' />
                </div>
                <div className="holdername">

                    <input type="text" name='cardholder' placeholder='card holder' />
                </div>
                    <div className='payinfo'>
                    <input type="text" name='cardNumber' placeholder='1234 5678 9123 4567' />
                    <input type="text" name='expdate' placeholder='05/25' />
                    <input type="text" name='cvv' placeholder='cvv: 123' />
                    </div>
                    <div>
                        
                    </div>
                    <span>You will Pay :  <span>$  {paids}</span></span>
                <button>Pay Now</button>
                <img src={pay} alt="" />
            </div>
        </section>
        <Footer/>
    </Fragment>
  )
}

export default Payment