import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserThunkActionCreator } from "../../Redux/action";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.setItem("login", JSON.stringify(false));
    localStorage.setItem("userImg", null);
    dispatch(logoutUserThunkActionCreator());
    navigate("/");
  };

  const auth = useSelector((data) => {
    return data.auth;
  });
  return (
    <>
      <div id="navbar-parent">
        <div id="navbar-header">
          <div id="img-myfitnesspal">
            <Link to="/home" id="img-myfitnesspal">
              <img
                src="/images/4.jpg"
                alt="fit-eatiopia logo"
                id="fit-eatiopia-logo"
              />
            </Link>
          </div>
          
        </div>
        <div id="navigations">
          <div id="navigation-details">
            <button>
              {" "}
              <Link id="link-color" to="/home">
                MY HOME
              </Link>{" "}
            </button>
            <button>
              {" "}
              <Link id="link-color" to="/food">
                FOOD
              </Link>{" "}
            </button>
            <button>
              {" "}
              <Link id="link-color" to="/exercise">
                EXCERCISE
              </Link>{" "}
            </button>
            <button>
              {" "}
              <Link id="link-color" to="/reports">
                REPORTS
              </Link>{" "}
            </button>

            <button>
              {" "}
              <Link id="link-color" to="#">
                COMMUNITY
              </Link>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export { Navbar };
