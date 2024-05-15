import React, { Component } from 'react';
import Song1 from './Tasakku Tasakku.mp3';
import './play.css';
import Log from './logo.png';
import Nam from './name.png';
export const Play=()=>{ 
    return(
        <div className='plyr'>
            <img className='log' src={Log}/><br></br>
            <img className='nam' src={Nam}/>
            <audio className='audio-element' id='sng'><source src={Song1}></source></audio>
            <div class="btn-group" role="group" aria-label="Basic example">
            <button className='btn' onClick={onplay} >Play</button>
            <button className='btn' onClick={onpause}>Pause</button>
            </div>
        </div>
    );
    
    function onplay()
    {
        var x=document.getElementById('sng');
        x.play();

    }
    function onpause()
    {
        var x=document.getElementById('sng');
        x.pause();
    }
}