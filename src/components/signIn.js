
import axios from 'axios';
import React, { useState } from 'react';
import '../login.css';
import AllProductsPage from '../pages/allProductsPage';

export default function SignIn(props){
  const currentUser=props.currentUser;
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[message,setmessage]=useState("")
    let handleSignUp = () =>{
        props.history.push(`/register`)
    }
    let handleSubmit = async (e) =>{
        e.preventDefault()
        try{
        const data = await axios.post(`https://equipment-hiring.herokuapp.com/signin`,{username,password})
       currentUser(data.data.message);
       props.history.push(`/cart`)
      }catch(err){
        setmessage(err.response.data.message)
      }
    }

    return(
        <div class="container" style={{"margin-top":"70px"}}>
  <div id="formContent" style={{"margin":"auto","width":"60%","margin-bottom":"70px"}}>
  
    <div class="fadeIn first">
      <img src="https://www.clipartmax.com/png/middle/151-1517793_do-you-own-a-business-users-icon-font-awesome.png" id="icon" alt="User Icon" />
    </div>

   
    <form onSubmit={(e)=>{handleSubmit(e)}}>
      <input type="email" id="login" class="fadeIn second" name="login" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="email id"/>
      <input type="text" id="password" class="fadeIn third" name="login" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
      <input type="submit" class="fadeIn fourth btn btn-primary" value="Log In"/>
      <br></br>
      <span style={{color:"red",fontWeight:"bold"}}>{message}</span>
    </form>

  
    <div id="formFooter">
      <a class="underlineHover" href="#" onClick={handleSignUp}>Not a member?</a>
    </div>

  </div>
</div>
    );
}