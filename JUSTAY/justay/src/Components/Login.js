import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Pic from './logo.png';
import Just from './name.png'; 
const Login=()=>  { 
    const navigate=useNavigate();
        return (
            <div className='login'>
                 <img className='pij' src={Pic}/><br></br>
                <img className='vij' src={Just}/><br></br>
                <form>
                <input type='text' className='usname' placeholder='Username' ></input><br></br>
                <input type='password' className='pass' placeholder='Password' ></input><br></br>
                <button className='Login' onClick={()=>navigate('homepage')}>LogIn</button> <br></br>
                <button className='SignUp' onClick={()=>navigate('signup')} >SignUp</button> <br></br>
                <Link  className='fgt' to='/forgot'>Forgot Password?</Link>
                </form>
            </div>
        );
    }

export default Login;