import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'


const Login = () => {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate()
      const location = useLocation()
      const from =location?.state?.from?.pathname || ""

      const handleEmailBlur= event=>{
        setEmail(event.target.value)
    }
    const handlepasswordBlur= event=>{
        setPassword(event.target.value)
    }
    const handleSignIn= event=>{
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    if(user){
        navigate(from, { replace: true })
    }
    return (
        <div className='form-container'>
            <div>
            <form onSubmit={handleSignIn}>
            <h2 className='from-tile'>Login</h2>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
            </div>
           <p>{loading && <>Loading....</>}</p>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input onBlur={handlepasswordBlur} type="password" name="password" id="" required/>

            </div>
            <p>{error?.message}</p>

           <div> <input className='form-submit' type="submit" value="Login" /></div>
            </form>
            <p>New Ema-Jhon? <Link className='form-link' to='/signup'>Create New Account</Link></p>
            </div>
        </div>
    );
};

export default Login;