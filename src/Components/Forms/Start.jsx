import React from 'react'  //1
import { Link } from "react-router-dom";
// import Name from './Name';
import "./Start.css";

export default function Start() {
  return (
    <div>
      <div id='head'>
        <img src= "/images/4.jpg" style={{height:"90px"}}/>
      </div>
      
      <div id='mainDiv'>
        <h2>Welcome! Let’s customize for your goals.</h2><br/>
        <Link id='continue' to='/'>HOME</Link>
        <Link id='continue' to='/Name'>CONTINUE</Link>
        
      </div>
    </div>
  )
}

