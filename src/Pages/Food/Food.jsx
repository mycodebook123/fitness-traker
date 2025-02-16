import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Table from "../../Components/Table/Table";
import TotalTable from "../../Components/TotalTable/TotalTable";
import styles from "./Food.module.css";
import CompleteEntry from "../../Components/CompleteEntry/CompleteEntry";
import WaterCount from "../../Components/WaterCount/WaterCount";
import { Link } from "react-router-dom";
import "../../Components/Routes/Navbar.css";
import Date from "./Date";

export default function Food() {
  const storeData = useSelector((data) => {
    return data;
  });
  console.log(storeData);

  const [isEatingEnough, setIsEatingEnough] = useState(false);

  return (
    <>
      <div className={styles.Food}>
        <div className={styles.mainDiv}>
          <Date />
          <div className={styles.meals}>
            <Table meal="Breakfast" />
            <Table meal="Lunch" />
            <Table meal="Dinner" />
            <Table meal="Snacks" />
            <TotalTable
              breakfast={storeData.Breakfast}
              lunch={storeData.Lunch}
              dinner={storeData.Dinner}
              snacks={storeData.Snacks}
              isEatingEnough={isEatingEnough}
              setIsEatingEnough={setIsEatingEnough}
            />
          </div>
          <CompleteEntry isEatingEnough={isEatingEnough} />

          <WaterCount />

          <button className={styles.reportBtn}>
            <Link
              to="/reports"
              style={{ textDecoration: "none", color: "#e0c031ef" }}
            >
              View Full Report (Printable)
            </Link>
          </button>
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
