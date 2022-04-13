import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const SignUP = () => {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [confirmPassword, setconfirmPassword]= useState('')
    const [error, setError]= useState('')
    const navigate = useNavigate()
    const [createUserWithEmailAndPassword, user] =  useCreateUserWithEmailAndPassword(auth)
    const handleEmailBlur= event=>{
        setEmail(event.target.value)
    }
    const handlepasswordBlur= event=>{
        setPassword(event.target.value)
    }
    const handleconfirmPasswordBlur= event=>{
        setconfirmPassword(event.target.value)
    }
    const handleCreateUser = event=>{
        event.preventDefault()
        if(password !== confirmPassword){
            setError("Your password no match")
            return;
        }
        if(password.length<6){
            setError('Please enter 6 charactor or longer')
        }
        createUserWithEmailAndPassword(email, password)
    }
    if(user){
        navigate('/shop')
    }
    return (
        <div className='form-container'>
            <div>
            <form onSubmit={handleCreateUser} >
            <h2 className='from-tile'>Sign Up</h2>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input onBlur={handlepasswordBlur} type="password" name="password" id="" required/>
            </div>
            <div className="input-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input onBlur={handleconfirmPasswordBlur} type="password" name="confirm-password" id="" required/>
            </div>
            <p style={{color:'red'}}>{error}</p>
           <div> <input className='form-submit' type="submit" value="Sign Up" /></div>
            </form>
            <p>New Ema-Jhon? <Link className='form-link' to='/signup'>Create New Account</Link></p>
            </div>
        </div>
    );
};

export default SignUP;