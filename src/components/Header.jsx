import logo from "../assets/img/health-keeper-high-resolution-logo-transparent.png";
import userImg from "../assets/img/user.svg";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { userContext } from "../services/context";
import { React, useState, useEffect, useContext, useRef } from "react";
import { fetchUserProfile } from "../services/UserProfileService";

function Header() {
  const { user } = useContext(userContext);

  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (user){
   fetchUserProfile(user).then((response) => {
     setUserData(response.data);
   });

    }
 
   
  }, [user]);

  return (
    <header className="header">
      <a href="/" style={{ flex: 1 }}>
        <img src={logo} alt="" className="logo" />
      </a>

      {user && (
        <>
          <a href="/dashboard" style={
            {
              textDecoration: "none"
            }
          }>
            <nav className="user-nav">
              <div className="user-nav__user">
                <img src={userImg} alt="" className="user-nav__user-photo" />
                <span className="user-nav__user-name">{userData.name}</span>
              </div>
            </nav>
          </a>

          <nav className="user-nav">
            <div className="user-nav__user">
              <a
                href="#"
                className="btn  btn--animated"
                style={{ backgroundColor: "#0A1D56", color: "#fff" }}
                onClick={() => {
                  localStorage.removeItem("id");
                  window.location.href = "http://localhost:5173/";
                }}
              >
                Logout
              </a>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}

export default Header;
