
import axios from 'axios';
import React, { useState } from 'react';
import '../login.css';

export default function Register(props){
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[confirmpassword,setConfirmPassword]=useState("");
    const[error,seterror]=useState("");
    const[success,setSuccess]=useState("")
  
    let handleSubmit = async (e) =>{
        e.preventDefault()
        if(password===confirmpassword)
        { 
            seterror("")
            const data = await axios.post(`https://equipment-hiring.herokuapp.com/register`,{username,password})
           setSuccess(data.data.message)
           
        }
           
        else{
seterror("Password and Confirm Password don't match.")
        }
       
    }
    let handleSignIn = () =>{
        props.history.push(`/signin`)
    }
    return(
        <div class="container" style={{"margin-top":"70px"}}>
  <div id="formContent" style={{"margin":"auto","width":"60%","margin-bottom":"70px"}}>
  
    <div class="fadeIn first">
      <img src="https://www.clipartmax.com/png/middle/151-1517793_do-you-own-a-business-users-icon-font-awesome.png" id="icon" alt="User Icon" />
    </div>

   
    <form onSubmit={(e)=>{handleSubmit(e)}}>
      <input type="email" id="login" class="fadeIn second" name="login" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="email id" required/>
      <input type="text" id="password" class="fadeIn third" name="login" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" required/>
      <input type="text" id="confirmpassword" class="fadeIn third" name="login" value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="confirm password" required/>
      <input type="submit" class="fadeIn fourth btn btn-primary" value="Register"/>
      <span><p>{error}</p></span>
    </form>

  
    <div id="formFooter">
     <span><p>{success}</p></span>
     <span> <a class="underlineHover" href="#" onClick={handleSignIn}>Sign In</a></span>
    </div>

  </div>
</div>
    );
}