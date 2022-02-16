import React, { useState } from 'react'

function ShippingAddress(props) {
    const [fullName,setFullName] = useState('');
    const [address,setAddress] = useState('');
    const [city,setCity] = useState('');
    const [postalCode,setPostalCode] = useState('');
    const [country,setCountry] = useState('');
    const submitHandler = (e)=>{
e.preventDefault();
localStorage.setItem('address',JSON.stringify({fullName,address,city,postalCode,country}));
props.history.push('/payment');
//save shipping address
    }

  return (
    <div>
        <form className='form' onSubmit={submitHandler}>
            <div>
                <h4>
                    Shipping Address
                </h4>
            </div>
            <div>
                <label htmlFor='fullname'>Full Name</label>
                <input type="text"
                id="fullName"
                placeholder="Enter full name"
                value={fullName}
                onChange = {(e)=>setFullName(e.target.value)}
                required
                />
            </div>
            <div>
                <label htmlFor='address'>Address</label>
                <input type="text"
                id="address"
                placeholder="Enter address"
                value={address}
                onChange = {(e)=>setAddress(e.target.value)}
                required
                />
            </div>
            <div>
                <label htmlFor='city'>City</label>
                <input type="text"
                id="city"
                placeholder="Enter city"
                value={city}
                onChange = {(e)=>setCity(e.target.value)}
                required
                />
            </div>
            <div>
                <label htmlFor='postalCode'>Postal Code</label>
                <input type="text"
                id="postalCode"
                placeholder="Enter postal code"
                value={postalCode}
                onChange = {(e)=>setPostalCode(e.target.value)}
                required
                />
            </div>
            <div>
                <label htmlFor='country'>Country</label>
                <input type="text"
                id="country"
                placeholder="Enter country"
                value={country}
                onChange = {(e)=>setCountry(e.target.value)}
                required
                />
            </div>
<div>
    <label/>
    <button className='btn btn-primary form-btn' type='submit'>Continue</button>
</div>
        </form>
    </div>
  )
}

export default ShippingAddress