import React from 'react';
import { Link } from 'react-router-dom';

export default function Product(props){
    const{product}=props;
    return(
        <div  key ={product.id} class="col-sm-4 col-sm-offset-2 card" style={{"width": "18rem","margin":"0 10px 10px 10px"}}>
<Link to={`/product/${product.id}`}><img className ="card-img-top"  src={product.image} alt={product.name}/></Link>
<div class="card-body">
<Link to={`/product/${product.id}`}><h6>{product.name}</h6></Link>
   <div className="price">
    <h5>&#8377;{product.price}</h5> 
 </div>
  
</div>
        </div>

    )
}