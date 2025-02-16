import React from "react";
import "./Home.css";
import { FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./../Routes/Navbar.css";

export default function Home() {
  const breakfast = useSelector((data) => {
    return data.Breakfast;
  });
  const lunch = useSelector((data) => {
    return data.Lunch;
  });
  const dinner = useSelector((data) => {
    return data.Dinner;
  });
  const snacks = useSelector((data) => {
    return data.Snacks;
  });
  const cardio = useSelector((data) => {
    return data.cardio;
  });

  const auth = useSelector((data) => {
    return data.auth;
  });

  const calTotalCalories = () => {
    return (
      breakfast.reduce((acc, el) => {
        return acc + el.calories;
      }, 0) +
      lunch.reduce((acc, el) => {
        return acc + el.calories;
      }, 0) +
      dinner.reduce((acc, el) => {
        return acc + el.calories;
      }, 0) +
      snacks.reduce((acc, el) => {
        return acc + el.calories;
      }, 0)
    );
  };

  const calTotalBurned = () => {
    return cardio.reduce((acc, el) => {
      return acc + el.calories_burned;
    }, 0);
  };


  const profileImg = JSON.parse(localStorage.getItem("userImg"))|| null;

  return (
    <>
      <div className="parent">
        <div id="two-bars">
          <div id="left-bar">
            <div id="top-header">
              <h2>Your Daily Summary</h2>
              <div>
                <h2>1</h2>
                <div>
                  <p>DAY</p>
                  <p>STREAK</p>
                </div>
              </div>
            </div>
            <div id="calculator">
              <div className="calculations">
                <div id="calculations-top">
                  <div>
                    <p>Calories Remaining</p>
                    <h1>{2860 - (calTotalCalories() - calTotalBurned())}</h1>
                  </div>
                  <div id="add-button">
                    <button>
                      <Link
                        to="/exercise"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Add Excercise
                      </Link>
                    </button>

                    <button>
                      <Link
                        to="/food"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Add Food
                      </Link>
                    </button>
                  </div>
                </div>
                <div id="calculations-bottom">
                  <div>
                    <p>2860</p>
                    <p>GOAL</p>
                  </div>
                  <div>
                    <p></p>
                  </div>
                  <div>
                    <p>{calTotalCalories()}</p>
                    <p>FOOD</p>
                  </div>
                  <div>
                    <p>-</p>
                  </div>
                  <div>
                    <p>{calTotalBurned()}</p>
                    <p>EXCERCISE</p>
                  </div>
                  <div>
                    <p>=</p>
                  </div>
                  <div>
                    <p>{calTotalCalories() - calTotalBurned()}</p>
                    <p>NET</p>
                  </div>
                </div> 
              </div>
            </div>
            <div id="scroll-bar">
              <div id="lbs-gained">
                <div>
                  <p>
                    <span>{(calTotalCalories() - calTotalBurned()) / 100}</span>{" "}
                    lbs{" "}
                  </p>
                  <p>GAINED</p>
                </div>
                <div id="clipboard-icon">
                  <FaClipboardList className="clip-icon" />
                </div>
              </div>
              <div id="bar">
                {/* <input type="range" style={{color}}/> */}
                <progress
                  id="progress"
                  max="20"
                  value={(calTotalCalories() - calTotalBurned()) / 100}
                  style={{ height: "30px", accentColor: "rgb(133,196,0)" }}
                ></progress>
              </div>

              {/* {<div id='bar'
                class="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "25%" }}>
              </div> } */}
            </div>
            
          </div>
        </div>
        <div className="footStyle" style={{position: "fixed", bottom: 0, width: "100%", backgroundColor: "#f8f9fa", padding: "10px 0"}}>
                <div className = "navbar" style={{fontSize: "14px", display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
                  {/* <Link style={lin} to='/food'>FOOD</Link>
                  <Link style={lin} to='/exercise'>EXERCISE</Link>
                  <Link style={lin} to='/apps'>APPS</Link> */}
                  <Link style={lin} to='/'>ABOUT</Link>
                  <Link style={lin} to='/community'>COMMUNITY</Link>
                  <Link style={lin} to='/blog'>BLOG</Link>            
                  <Link style={lin} to='/premium'>PREMIUM</Link>            
                </div>
                {/* <div>
                  <Link style={fin} to='/calorie'>Calorie Tracker</Link>
                  <Link style={fin} to='/blog'>Blog</Link>
                  <Link style={fin} to='/terms'>Terms</Link>
                  <Link style={fin} to='/privacy'>Privacy</Link>
                  <Link style={fin} to='/contact'>Contact Us</Link>
                  <Link style={fin} to='/api'>API</Link>
                  <Link style={fin} to='/jobs'>Jobs</Link>
                  <Link style={fin} to='/feedback'>Feedback</Link>
                  <Link style={fin} to='/community'>Community Guidelines</Link>
                </div> */}
                {/* <div>
                  <Link style={fin} to='/cookie'>Cookie Preferences</Link>
                  <Link style={fin} to='/ad'>Ad Choices</Link>
                  <Link style={fin} to='/personalinfo'>Do Not Sell My Personal Information</Link>
                </div> */}
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                  <p style={{fontSize: "13px", marginTop: "10px", paddingBottom: "1px"}}>© 2023 HabeshaFit, Inc.</p>
                </div>
              </div>
            </div>
        
    </>
  );
}

const lin = {
  textDecoration: "none",
  marginRight: "10px",
  padding: "0px 16px",
  fontWeight: "700",
  color: "black",
};

const fin = {
  marginRight: "10px",
  fontSize: "11px",
  padding: "2px 2px",
  lineHeight: "18px",
  textDecoration: "none",
  color: "#0066EE",
};
