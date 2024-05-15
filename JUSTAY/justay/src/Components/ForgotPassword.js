import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';
import Logo from './logo.png';
import Name from './name.png';
const ForgotPassword=()=> {
        const navigate=useNavigate();
        return (
        <div className='fgtpass'>
            <h1 className="head1">Forgot Password</h1>
            <img className='title' alt='justay' src={Name}></img><br></br>
            <span className='otp'>Enter OTP sent to Registered E-Mail</span><br></br>
            <form>
                <input type="password" className='newpass' id='newpass' placeholder='New Password' required></input> <br></br>
                <input type="password" className='confirmpass' id='confirmpass'  placeholder='Confirm Password' required ></input> <br></br>
                <p id='msg'></p>
                <button   className='save' onClick={()=>navigate('/')}>Save</button> <br></br>
            </form>
            <img className='small' alt='logo' src={Logo}/><br/>
        </div>
        );
    }
    /*changeButton()
    {
        let newpass=document.getElementById("newpass").value;
        let cnfrmpass=document.getElementById("confirmpass").value;
        console.log(newpass,cnfrmpass);
        let condition=document.getElementById("msg");
        if(newpass.length!=0)
        {
            if(cnfrmpass!=newpass)
            {
                alert("Passwords should be same!!!");
            }
            else
            {
                this.setState({disabled:true});
            }
        }
        else
        {
            alert("Password should not be empty!!");
        }
    }*/
    

export default ForgotPassword;