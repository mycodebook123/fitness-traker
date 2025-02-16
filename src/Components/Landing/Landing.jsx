import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css"

function Header (){
  return (
    <div className="Landing_header">
      {/* <img src="/images/4.jpg" style={{height:"90px"}}/> */}
      <Link style={{textDecoration:"none",color: "black",marginRight:"10px", fontSize:"14px"}} to='/login'><h4>LOG IN</h4></Link>
    </div>
  )
}

function Landing(props) {
  return (
    <div>
      <Header/>
      <div className="start">
      <img src="/images/4.jpg"/>
      </div>
      <img src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Decorative-Elements-PNG/Deco_Gold_Border_PNG_Clip_Art.png?m=1508640902" style={{height:"70px", width:"100%"}}/>

      <div className="mainwelcome">
        <div className="Land-one">
          <div style={{width:"50%"}}>
            <h1>Wellness begins with authentic ኢትዮጲያዊ flavors.</h1>
            <p>Discover the benefits of Ethiopian cuisine. Track meals, embrace a cultural journey, and achieve your health goals with HabeshaFit.</p>
            <Link className="startbtn" to='/start'>START YOUR JOURNEY</Link>
          </div>
          <div>
            <img src="https://i.pinimg.com/474x/4c/77/bc/4c77bcbc30d83d29b0981e3cecda0107.jpg"/>
          </div>
        </div>


        <div className="Land-two">
          <img src="https://i.pinimg.com/474x/d5/d5/77/d5d577f16cecde97d3663fab34109421.jpg"></img>
          <div>
              <h1>Track meals from a rich culinary heritage.</h1>
              <p>Explore the nutritional richness of injera, lentils, stews, and more while staying on top of your health journey.</p>
          </div>
        </div>


        <div className="Land-three">
          <h1>The Tools for Your Goals</h1>
          <p>Whether you aim to eat mindfully, stay fit, or dive into Ethiopian
             food culture, we provide the right tools to succeed.</p>
        </div>


        <div className="Land-four">
          <div>
              <img src="https://i.pinimg.com/736x/ce/b1/33/ceb133bbefaa03e8f3a1fe0314c7c8ef.jpg"/>
              <h3>Learn. Track. Improve.</h3>
              <p>Document your meals and understand the wholesome benefits of Ethiopian ingredients like teff and berbere.</p>
          </div>
          <div>
              <img src="https://i.pinimg.com/474x/ae/5d/e8/ae5de88da31565c31e6519447ec9c208.jpg"/>
              <h3>Logging Simplified.</h3>
              <p>Log Ethiopian recipes, track calories, and adjust portion sizes with ease.</p>
          </div>
          <div>
              <img src="https://i.pinimg.com/736x/9d/d6/1f/9dd61fe88624e527dab8d6f70fea50b0.jpg"/>
              <h3>Stay Motivated.</h3>
              <p>Connect with a vibrant community to share tips, recipes, and cultural insights.</p>
          </div>
        </div>


        <div className="Land-five">
          <h1>Success Stories</h1>
          <p>Thousands of users are achieving their goals with HabeshaFit. Let their stories inspire your journey.</p>
        </div>

        <div className="mid_btn">
          <Link className="mid_startbtn" to='/start'>START YOUR JOURNEY</Link>
        </div>


        <p className="Land_nin">
          HabeshaFit is a holistic platform for health and fitness, celebrating Ethiopian cuisine and culture. Join a growing community committed to wellness through mindful eating and active living.
        </p>
      </div>

      <div className="footStyle" style={{position: "fixed", bottom: 0, width: "100%", backgroundColor: "#f8f9fa", padding: "10px 0"}}>
                      {<div className = "navbar" style={{fontSize: "14px", display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
                      <Link style={lin} to='/'>ABOUT</Link>
                      <Link style={lin} to='/community'>COMMUNITY</Link>
                      <Link style={lin} to='/blog'>BLOG</Link>            
                      <Link style={lin} to='/premium'>PREMIUM</Link>            
                    </div>
                     }
                   {<div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                   <p style={{fontSize: "13px", marginTop: "10px", paddingBottom: "1px"}}>© 2023 HabeshaFit, Inc.</p>
                    </div> }
                  </div>
    </div>
  );
}

export default Landing;

const lin = {
  textDecoration: "none",
  marginRight: "10px",
  padding:"0px 16px",
  fontWeight: "700",
  color: "black"
}

const fin = {
  marginRight: "10px",
  fontSize: "11px",
  padding:"2px 2px",
  lineHeight: "18px",
  textDecoration: "none",
  color: "#0066EE"
}
