import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import HomePage from './pages/homePage';
import ProductPage from './pages/productPage';
import AllProductsPage from './pages/allProductsPage';
import CartPage from './pages/cartPage';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import ContactUs from './components/contactUs';
import SignIn from './components/signIn';
import Register from './components/register';
import ShippingAddress from './pages/shippingAddress';
import PaymentMethod from './pages/paymentMethod';
import PlaceOrder from './pages/placeOrder';
function App() {
  const [cartItems,setCartItems]=useState([]);
  const [loggedUser,setLoggedUser]=useState("");
  const [UID,setUID]=useState("");
  const [isSignedIn,setIsSignedIn]=useState(false);

  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cartItems));
  },[cartItems])

 const onAdd=(product,quantity,days)=>{
   const exist=cartItems.find((x)=>x.id===product.id);
   if(exist){
     cartItems.map((x)=>
x.id===product.id?{...exist,qty:quantity,days:days}:x
     )
   }
   else{
    setCartItems([...cartItems,{...product,qty:quantity,days:days}])
  }
 }

 const onRemove=(product)=>{
  const exist=cartItems.find((x)=>x.id===product.id);
  if(exist){
    setCartItems(cartItems.filter((x)=>x.id!==product.id))
  }
  else{
    cartItems.map((x)=>
      x.id===product.id?{...exist}:x
           )
           
  }
 }
 const currentUser=(user)=>{
   if(user!==""){
    
     var name = user.match(/^([^@]*)@/)[1];
     setLoggedUser(name)
     setIsSignedIn(true)
     localStorage.setItem('username',JSON.stringify(name));
   }
 }
 const userId =(id)=>{
   if(id){
     setUID(id);
   }
 }
 const handleLogout = () =>{
   setLoggedUser("");
   setIsSignedIn(false);
 }
  return (
    <BrowserRouter>
    <div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container px-4 px-lg-5">
                <Link to="/" class="navbar-brand">Home</Link>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto my-2 my-lg-0">
                    <li class="nav-item"><Link to="" class="nav-link">{loggedUser==="" ? <h5></h5>: <h6 >Welcome {loggedUser}</h6>}</Link></li>
                        <li class="nav-item"><Link to="/product" class="nav-link">Products</Link></li>
                        <li class="nav-item"><Link to="/contact" class="nav-link">Contact</Link></li>
                        <li class="nav-item"><Link to="/cart" class="nav-link">Cart {cartItems.length>0 && (<span className="cart-badge">{cartItems.length}</span>)}</Link></li>
                        {!isSignedIn ? <li class="nav-item"><Link to="/signin" class="nav-link">Sign In</Link></li>
                        :
                        <li class="nav-item"><Link to="/" class="nav-link" onClick={handleLogout}>Sign Out</Link></li>
                        }
                        
                       
                    </ul>
                </div>
            </div>
        </nav>
    <div>
      <Route path="/" component={HomePage} exact/>
      <Route path="/product" component={AllProductsPage} exact/>
      <Route path="/contact" component={ContactUs} exact/>
      <Route path="/product/:id" component={(props)=><ProductPage {...props} cartItems={cartItems} onAdd={onAdd}/>}/>
      <Route path="/cart/:id?" component={(props)=><CartPage {...props} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} singInStatus={isSignedIn}/>}/>
      <Route path="/signin" component={(props)=><SignIn {...props} currentUser={currentUser} userId={userId}/>} exact/>
      <Route path="/register" component={Register} exact/>
      <Route path="/shipping" component={ShippingAddress} exact/>
      <Route path="/payment" component={PaymentMethod} exact/>
      <Route path="/placeorder" component={(props)=><PlaceOrder {...props} cartItems={cartItems} currentUser={currentUser}/>} exact/>
      <footer class="bg-light py-5">
            <div class="container px-4 px-lg-5"><div class="small text-center text-muted">Copyright &copy; 2021 - EquipmentOnRent</div></div>
        </footer>
</div>
</div>
</BrowserRouter>
  );
}

export default App;
