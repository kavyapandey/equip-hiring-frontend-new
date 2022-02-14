import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/product";
import MessageBox from "../components/messageBox";
import Spinner from 'react-spinner-material';

export default function AllProductsPage(){
   const[products,setProducts]=useState([]);
   const[error,setError]=useState(false);
   const[category,setCategory]=useState(0);
   const[showLoader,setShowLoader]=useState(true);
   console.log("category is",category)
useEffect(()=>{
   const fetchData = async () => {
      try{ 
         const {data} = await axios.get('https://equipment-hiring.herokuapp.com/products');
         console.log(data)
      setProducts(data);
      setCategory("all");
      setShowLoader(false);
   }catch(err){
setError(err.message)
   }
     
   };
   const postData = async () => {
      try{ 
         const {data} = await axios.post('https://equipment-hiring.herokuapp.com/createProducts');
         console.log(data)
   }catch(err){
setError(err.message)
   }
     
   };
   //postData();
   fetchData();
},[])

    return(  
    <div>
             {
       error ? (<MessageBox variant="danger">{error}</MessageBox>):
       (
        <div>
           <select onChange={e=>setCategory(e.target.value)} class="form-select" style={{"margin-top":"100px",marginLeft:"26px",width:"95%"}} aria-label="Default select example">
  <option selected value="all">Display all products</option>
  <option value="audio">Audio</option>
  <option value="video">Video</option>
  <option value="photography">Photography</option>
  <option value="light">Light</option>
</select>
{showLoader ? <div style={{width:"15%",margin:"auto",padding:"50px"}}>
        <Spinner radius={80} color={"#F4623A"} stroke={5} visible={true} />
      </div> :
<div className="row" style={{"margin-top":"70px","margin-left":"17px"}}>
       {
       category!=="all"?
           ( products.filter(product=>product.type === category)
            .map(product=>(
         <Product key ={product.id} product={product}></Product>
            )
      
            )):
            (
               products.map(product=>(
                  <Product key ={product.id} product={product}></Product>
                     )
               
                     )
            )
         }
      
       
      
      </div>
             }
        </div>  
      )}
       </div>
    )
   
}