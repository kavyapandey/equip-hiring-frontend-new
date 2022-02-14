import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Spinner from 'react-spinner-material';

export default function ProductPage(props){
    const{onAdd}=props;
    const[products,setProducts]=useState([]);
    const[error,setError]=useState(false);
    const[qty,setQty]=useState(1);
    const [startDate, setStartDate] = useState(new Date());
 const [endDate, setEndDate] = useState(new Date());
 const[days,setDays]=useState(1);
 const[showLoader,setShowLoader]=useState(true);
 
 const handledateChange =()=>{
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    const Difference_In_Time = date2.getTime() - date1.getTime();
    const Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
    if(Difference_In_Days !== 0)
    setDays(Difference_In_Days);
}
    useEffect(()=>{
        if(endDate)
        {
            handledateChange();
        }
        const fetchData = async () => {
           try{ 
              const {data} = await axios.get('https://equipment-hiring.herokuapp.com/products');
             
           setProducts(data);
           setShowLoader(false)
          
        }catch(err){
     setError(err.message)
        }
          
        };
        fetchData();
     },[endDate])
  
    const product = products.find((i) => i.id == props.match.params.id);
    
    if(!product){
        return <div><h2>Product not found</h2></div>
    }

    const addToCartHandler = () =>{
        onAdd(product,qty,days);
        props.history.push(`/cart/${product.id}?qty=${qty}`);
      
       
    }

    return(
         showLoader ? <div style={{width:"15%",margin:"auto",padding:"100px"}}>
        <Spinner radius={80} color={"#F4623A"} stroke={5} visible={true} />
      </div>
       :   
    <div className="container-fluid" style={{"margin-top":"100px"}}>
       <Link to ="/product">Back to Products</Link>
        <div className="row">
            <div className="col-sm-4">
<img className ="fit-to-div" src={product.image} alt={product.name}></img>
            </div>
            <div className="col-sm-3">
                <ul>
                    <li><b>{product.name}</b></li>
                    <li>{product.type}</li>
                    <li>&#8377;{product.price}</li>
                </ul>
                </div>
                <div className="col-sm-5">
                    <div class="row">
                        <div style={{"display":"inline-flex"}}>
                            <div class="col-sm-6">
                            <DatePicker
       selected={startDate}
       selectsStart
       startDate={startDate}
       endDate={endDate}
       onChange={date => setStartDate(date)}
     />
     </div>
     <div class="col-sm-6">
     <DatePicker
      selected={endDate}
      selectsEnd
      startDate={startDate}
      endDate={endDate}
      minDate={startDate}
      onChange={date =>setEndDate(date)}
     
     />
     </div>
                            
  

   </div>
                    </div>
                <div class="mycard mycard-body">
                    <ul>
                        <li>
                            <div class="row">
                                <div class="col-sm-8"><b>Price</b></div>
                                <div class="price col-sm-4">&#8377;{product.price}</div>
                            </div>
                        </li>
                        <li>
                        <div class="row">
                                <div class="col-sm-8"><b>Status</b></div>
                                <div class="col-sm-4">{product.inStock>0 ? (<span class="success">In Stock</span>):
                               ( <span class="danger">Unavailable</span>)}
                               </div>
                    
                            </div>
                        </li>
                        {
                            product.inStock > 0 &&  (
                            <>
                            <li>
                                <div className ="row">
                                    <div class="col-sm-8"><b>Qty</b></div>
                                    <div class="col-sm-4">
                                        <select class="form-select" value = {qty} onChange={e=>setQty(e.target.value)}>
                                            {
                                                [...Array(product.inStock).keys()].map(x=>(
                                                    <option key = {x+1} value={x+1}>{x+1}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="row">
                                <div class="col-sm-8"><b>Days</b></div>
                                <div class="col-sm-4">{days}</div>
                                </div>
                            </li>
                            <li>
                            <button onClick={addToCartHandler} className="btn btn-primary">Add to Cart</button>
                        </li>
                        </>)
                        }
                       
                    </ul>
                </div>
                </div>
        </div>

        
    </div>)
}