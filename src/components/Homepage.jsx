import logo from "../assets/img/health-keeper-high-resolution-logo-transparent.png";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import "../App.css";
import Sidebar from "./Sidebar";
import ApplicationInformation from "./ApplicationInformation";
import Features from "./Features";

function Homepage() {
  return (
    <div className="content">
      <main className="main">
        <header className=" home">
          <div className="home__text-box">
            <h1 className="home-primary">
              <img src={logo} alt="Logo" className="home__logo" />
              <span className="home-primary--sub">
                Empowering you to take control of your health journey, one
                record at a time
              </span>
            </h1>
            <Link to="/login">
              <a
                href="#"
                className="btn btn--white btn--animated"
                style={{ marginRight: "1rem" }}
              >
                Login
              </a>
            </Link>
            <Link to="/signup">
              <a
                href="#"
                className="btn  btn--animated"
                style={{ backgroundColor: "#0A1D56", color: "#fff" }}
              >
                Sign up
              </a>
            </Link>
          </div>
        </header>
        <ApplicationInformation />
        <ApplicationInformation />
        <ApplicationInformation />
        <Features />
      </main>
    </div>
  );
}
export default Homepage;
