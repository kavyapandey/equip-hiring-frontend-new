import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MessageBox from "../components/messageBox";
import Product from "../components/product";

export default function CartPage(props){
   const {cartItems,onRemove,singInStatus}=props;
   console.log(cartItems)
    // const productID = props.match.params.id;
     //const quantity = props.location.search? Number(props.location.search.split('=')[1]) : 1;
     const checkoutHandler = () => {
             if(!singInStatus)
            { props.history.push('/signin')}
     }
    return(
           <div className="row" style={{"margin-top":"70px","margin-left":"17px"}}>
                   <div className="col-sm-9">
                           <h3>Shopping Cart</h3>
                           {
                                   cartItems.length === 0?<MessageBox>Cart is Empty. <Link to="/product">Go shopping</Link>
                                   </MessageBox> :
                                   (
                                           <ul>
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
                                                                              <div className="col-sm-2">
                                                           <button onClick={()=>onRemove(item)} className="btn btn-primary">Remove</button>
                                                                              </div>

                                                              </div>
                                                      </li>
                                              ))   }  
                                           </ul>
                                   )
                           }
                          </div>   
                           <div className="col-sm-3">
                                   <div className="mycard mycard-body">
                                           <ul>
                                                   <li>
                                                           <h5>Subtotal({cartItems.reduce((a,c)=>a + Number(c.qty),0)} items) : 
                                                           {
                                                                   cartItems.reduce((a,c)=> a + Number(c.price) * Number(c.qty) * Number(c.days),0)
                                                           }</h5>
                                                   </li>
                                                   <li>
                                                           <button type="button" onClick={checkoutHandler} className="btn btn-primary" disabled={cartItems.length===0}>
                                                                   Proceed to Checkout
                                                           </button>
                                                   </li>
                                           </ul>
                                   </div>
                           </div>
                 
           </div>
    );

}