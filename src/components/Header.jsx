import logo from "../assets/img/health-keeper-high-resolution-logo-transparent.png";
import userImg from "../assets/img/user.jpg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <a href="/">
        <img
          src={logo}
          alt=""
          className="logo"
         
        />
      </a>
      <nav className="user-nav">
        {/* <div className="user-nav__user">
            <img src={userImg} alt="" className="user-nav__user-photo" />
            <span className="user-nav__user-name">jonas</span>
          </div> */}
      </nav>
    </header>
  );
}

export default Header;
