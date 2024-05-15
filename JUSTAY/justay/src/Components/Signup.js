import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import Logo from './logo.png';
import Name from './name.png';
import { useNavigate } from 'react-router-dom';
const Signup=()=> {
        const navigate=useNavigate();
 
        return (
            <div className='signup'>
            <form>
                <input type='text' className='username' placeholder='Enter Username' required></input><br></br>
                <input type='text' className='mail' placeholder='Enter E-Mail Address' required></input><br></br>
                <input type='text' className='mobile' placeholder='Enter Phone Number'></input><br></br>
                <input type='password' className='setpass' placeholder='Set Password' required></input><br></br>
                <img className='logo'  alt='Logo' src={Logo}/><br></br>
                <img className='name'  alt='Justay' src={Name}/><br></br>
                <input className="check"  type="checkbox" required/>
                <span class="checklabel" >I've read and agree to the <Link className='tms' to='/terms'>Terms&Conditions</Link></span>
                <button className='signin' onClick={()=>navigate('/')} >SignIn</button> <br></br>
                </form>
            </div>
        );
    }
 
export default Signup;