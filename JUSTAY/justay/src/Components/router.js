import React, { Component } from 'react';
import { Routes,Route } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import { Play } from './play';
import Signup from './Signup';
import Terms from './terms';
const Con=()=>{
    return(
            <>
        <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/forgot' element={<ForgotPassword/>}/>
        <Route path='/homepage' element={<Play/>}/>
        <Route path='/song1' element={<Play/>}/>
     </Routes>
            </>
         )
}
export default Con;