
import React, { useState } from 'react'

function PaymentMethod(props) {
    const [payment,setPaymentMethod]=useState("RazorPay")
    const submitHandler=(e)=>{
        e.preventDefault();
        localStorage.setItem('paymentMethod',payment);
        props.history.push('/placeorder');
    }
  return (
    <div>
       
        <form className='form' onSubmit={submitHandler}>
<div>
    <h4>Payment Method</h4>
</div>
<div className='blockDisplay'>
    <input
    type="radio"
    id="razorpay"
    value="RazorPay"
    name="paymentMethod"
    required
    checked
    onChange={(e)=>setPaymentMethod(e.target.value)}/>
    <label htmlFor="razorpay">RazorPay</label>
</div>
<div className='blockDisplay'> 
    <input
    type="radio"
    id="cod"
    value="cod"
    name="paymentMethod"
    required
    onChange={(e)=>setPaymentMethod(e.target.value)}/>
    <label htmlFor="cod">COD</label>
</div>
<div>
    <button className='btn-primary' type='submit'>
Continue
    </button>
</div>
        </form>
    </div>
  )
}

export default PaymentMethod