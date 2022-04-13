import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const Shipment = () => {
    const [user] =useAuthState()
    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [address, setAddress]= useState('')
    const [phone, setPhone]= useState('')
    const [error, setError]= useState('')
    // const navigate = useNavigate()
   
    const handleNameBlur= event=>{
        setEmail(event.target.value)
    }
     
    const handleAddressBlur= event=>{
        setAddress(event.target.value)
    }
    const handlePhoneBlur= event=>{
        setPhone(event.target.value)
    }
    const handleCreateUser = event=>{
        event.preventDefault()
        const shipment =[name, email, address, phone]
       console.log(shipment)
    }
    
    return (
        <div className='form-container'>
            <div>
            <form onSubmit={handleCreateUser} >
            <h2 className='from-tile'>Shipment</h2>
            <div className="input-group">
                <label htmlFor="name">Name</label>
                <input onBlur={handleNameBlur} type="text" name="text" id="" required />
            </div>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input value={user?.email} readOnly type="email" name="email" id="" required />
            </div>
            <div className="input-group">
                <label htmlFor="address">Address</label>
                <input onBlur={handleAddressBlur} type="text" name="address" id="" required/>
            </div>
            <div className="input-group">
                <label htmlFor="phone">Phone</label>
                <input onBlur={handlePhoneBlur} type="text" name="phone" id="" required/>
            </div>
            <p style={{color:'red'}}>{error}</p>
           <div> <input className='form-submit' type="submit" value="Add Shipment" /></div>
            </form>
            
            </div>
        </div>
    );
};

export default Shipment;