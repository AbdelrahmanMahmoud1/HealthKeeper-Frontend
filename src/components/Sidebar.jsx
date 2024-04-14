import home from "../assets/img/SVG/home.svg";
import document from "../assets/img/SVG/file-text2.svg";
import medication from "../assets/img/SVG/eyedropper.svg";
import appointment from "../assets/img/SVG/stopwatch.svg";
import symptoms from "../assets/img/SVG/aid-kit.svg";
import profile from "../assets/img/SVG/user.svg";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [isActive, setIsActive] = useState(1);

  const classNames = {
    active: "side-nav__item side-nav__item--active",
    inactive: "side-nav__item side-nav__item",
  };

  function makeActive(number) {
    setIsActive(number);
  }

  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li
          className={isActive == 1 ? classNames.active : classNames.inactive}
          onClick={makeActive.bind(this, 1)}
        >
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <a href="#" className="side-nav__link ">
              <img src={home} className="side-nav__icon" />
              <span>Dashboard</span>
            </a>
          </Link>
        </li>

        <li
          className={isActive == 2 ? classNames.active : classNames.inactive}
          onClick={makeActive.bind(this, 2)}
        >
          <Link to="/mydocuments" style={{ textDecoration: "none" }}>
            <a href="#" className="side-nav__link ">
              <img src={document} className="side-nav__icon" />
              <span>My documents</span>
            </a>
          </Link>
        </li>

        <li
          className={isActive == 3 ? classNames.active : classNames.inactive}
          onClick={makeActive.bind(this, 3)}
        >
          <Link to="/medications" style={{ textDecoration: "none" }}>
            <a href="#" className="side-nav__link ">
              <img src={medication} className="side-nav__icon" />
              <span>medications</span>
            </a>
          </Link>
        </li>

        <li
          className={isActive == 4 ? classNames.active : classNames.inactive}
          onClick={makeActive.bind(this, 4)}
        >
          <Link to="/appointments" style={{ textDecoration: "none" }}>
            <a href="#" className="side-nav__link ">
              <img src={appointment} className="side-nav__icon" />
              <span>Appointments</span>
            </a>
          </Link>
        </li>

        <li
          className={isActive == 5 ? classNames.active : classNames.inactive}
          onClick={makeActive.bind(this, 5)}
        >
          <Link to="/symptoms" style={{ textDecoration: "none" }}>
            <a href="#" className="side-nav__link ">
              <img src={symptoms} className="side-nav__icon" />
              <span>symtoms detection</span>
            </a>
          </Link>
        </li>
        <li
          className={isActive == 6 ? classNames.active : classNames.inactive}
          onClick={makeActive.bind(this, 6)}
        >
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <a href="#" className="side-nav__link ">
              <img src={profile} className="side-nav__icon" />
              <span>Profile</span>
            </a>
          </Link>
        </li>

       
      </ul>
    </nav>
  );
}

export default Sidebar;
