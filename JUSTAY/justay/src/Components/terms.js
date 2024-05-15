import React, { Component } from 'react';
import Aji from './logo.png';
import bji from './name.png';
import { useNavigate } from 'react-router-dom';
import './terms.css';
const Terms=()=>  {
    const navigate=useNavigate();
        return (
            <div className='trms'>
                <img className='pic' src={Aji}/><br></br>
                <img className='nic' src={bji}/><br></br>
                <p className='para'><h4>YOUR AGREEMENT AND ACCEPTANCE</h4><li>The Booking Agreement between the Client and JUSTAY Music Production Limited shall be governed 
                by these standard Terms and Conditions including without limitation the provisions relating to intellectual 
                property rights and usage rights in the provisions of the services identified in the Booking Agreement.</li><h4>PAYMENT TERMS</h4>
                <li>The Client agrees to make payment in accordance with the terms set out in the Booking Agreement.</li><h4>CANCELLATION</h4>
                 <li>In the event of cancellation by the Client, the cancellation fees set out in the Booking Agreement shall apply.</li>
                 <li>In the event that the Client wishes to cancel the performance of the services, the Client is to provide a written 
                cancellation notice to JUSTAY Music Production Limited.</li><li> Cancellation is only taken to be effective upon the date of receipt of the
                 written cancellation notice by JUSTAY Music Production Limited.</li><h4> EXCLUSION OF LIABILITY </h4><li>JUSTAY Music Production Limited
                  shall not be liable for any loss of business, profits or goodwill or any indirect or consequential loss or damages whatsoever 
                 suffered or incurred by the Client in the course of providing the services specified in the Booking Agreement even if the Client 
                 has been apprised of the possibility of such damages or losses.</li></p>
                 <button className='back' onClick={()=>navigate('/signup')}>back</button>
            </div>
        );
    }
 
export default Terms;