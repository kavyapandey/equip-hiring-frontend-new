
import React, { useState } from 'react'
import Product from "../components/product";

export default function PlaceOrder(props) {
    const username = JSON.parse(localStorage.getItem('username'));
    const paymentMethod = (localStorage.getItem('paymentMethod'));
    const address = JSON.parse(localStorage.getItem('address'));
    const{cartItems,currentUser}=props;
    const [paymentStatus, setPaymentStatus] = useState("pending");
    const [paymentID,setPaymentID] = useState("");

    const loadScript = (src) =>{
return new Promise((resolove)=>{
    const script = document.createElement('script')
    script.src = src;
    script.onload = ()=>{
        resolove(true);
    }
    script.onerror = ()=>{
        resolove(false)
    }
    document.body.appendChild(script)
})
    }
    const displayRazor=async()=>{
const amount =  cartItems.reduce((a,c)=> a + Number(c.price) * Number(c.qty) * Number(c.days),0);
const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
if(!res)
{
    alert("you are offline..")
    return;
}
const options = {
    key:"rzp_test_CKj5rXQO1K5dE9",
    currency : "INR",
    amount : amount * 100,
    name : currentUser,

    handler : function (response){
        if(response.razorpay_payment_id){
            setPaymentStatus("successful");
            setPaymentID(response.razorpay_payment_id);
        }
    }
}
const paymentObject = new window.Razorpay(options)
paymentObject.open()
    }
  return (
    <div className="row" style={{"margin-top":"70px","margin-left":"17px"}}>
    <div className="col-sm-8">
            <h3>Order Summary</h3>
            <div className='row mycard mycard-body'>
                <div className='row'>
                    <div className='col-sm-3'> <h5>Name : </h5></div>
               <div className='col-sm-9'><span>{username}</span></div>
            
                </div>
           
            <div className='row'>
                <div className='col-sm-3'> <h5>
                Payment : 
            </h5></div>
                <div className='col-sm-9'> <span>{paymentMethod}</span></div>
           
           
            </div>
           <div className='row'>
           <div className='col-sm-3'> <h5>
                Address :
            </h5></div>
                <div className='col-sm-9'>  <span>{address.fullName+","+address.address+" "+address.city+" "+address.country+" "+address.postalCode}</span></div>
          
          
           </div>
           
            </div>
            {
                   
                    
                            <ul className='mycard mycard-body'>
                             {  cartItems.map((item)=>(
                                       <li key="{item.id}">
                                               <div className="row">
                                                       <div className="col-sm-2">
                                                               <img src={item.image} alt={Product.name} className="small" width="120px" height="120px"/>
                                                       </div>
                                                       <div  className="col-sm-3">
                                                               <h6><b>{item.name}</b></h6>
                                                               
                                                               </div>
                                                               <div  className="col-sm-2"><b>{item.qty}</b> items</div>
                                                               <div className="col-sm-2"><b>{item.days}</b> days</div>
                                                               <div  className="col-sm-1"><b>&#8377;{item.price}</b></div>
                                                             

                                               </div>
                                       </li>
                               ))   }  
                            </ul>
                    
            }
           </div>   
            <div className="col-sm-4">
                    <div className="row mycard mycard-body">
                            <ul>
                                    <li>
                                            <h5>Subtotal({cartItems.reduce((a,c)=>a + Number(c.qty),0)} items) : 
                                            {
                                                    cartItems.reduce((a,c)=> a + Number(c.price) * Number(c.qty) * Number(c.days),0)
                                            }</h5>
                                    </li>
                                    <li>
                                                           <button type="button" onClick={displayRazor} className="btn btn-primary" disabled={cartItems.length===0}>
                                                                   PAY ONLINE
                                                           </button>
                                                   </li>
                            </ul>
                    </div>
                    <div className="row mycard mycard-body">
                    {paymentMethod === "cod" ? ( <div>
                        <h5>Thankyou for your purchase</h5>
                    </div>) :
                    (
                        <div>
                            {paymentStatus === "pending" ? <h5>Payment is pending</h5> :  <div><h6>Order successful with payment ID {paymentID} </h6><h5>Thanks for your purchase !</h5></div> }
                       
                        </div>
                    )}
                    </div>
            </div>
  
</div>
  )
}
