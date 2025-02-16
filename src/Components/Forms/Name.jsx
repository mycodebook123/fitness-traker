import React, { useState } from "react"; //2
import { Link } from "react-router-dom";
import "./Start.css";
import "./Name.css";

export default function Goals() {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);


  
const handleMouseEnter = () => {
  setHovered(true);
};

const handleMouseLeave = () => {
  setHovered(false);
};

  return (
    <div>
      <div id='head'>
        <img src= "/images/4.jpg" style={{height:"90px"}}/>
      </div>
      <div id='mainDivG'>
        <div id='goal_heading'>
        <h3>Now for your goals.</h3><br/>
        <p>Select what is important to you.</p>
        </div><br/>
        <div id='goal-opt'>
          <button onClick={() => setClicked(!clicked)}
          style={{
            border: hovered ? "2px solid rgb(89, 89, 92)":'2px solid rgb(188, 188, 192)',
            border: clicked ? "2px solid rgb(234, 211, 81)":'2px solid rgb(188, 188, 192)',
            padding: '10px 20px',
            color: clicked ? 'rgb(234, 211, 81)' : 'black',
            fontWeight: clicked ?  "700" :  "500",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >Lose Weight</button>
  
          <button id='myButton'>Maintain Weight</button>
          <button>Gain Weight</button>
          
        </div><br/>
        <div>
        <Link id='backbtn' to='/start'><button>BACK</button></Link>
        <Link id='nextbtn' to='/statments'><button>NEXT</button></Link>
        </div>
      </div>
    </div>
  )
}


