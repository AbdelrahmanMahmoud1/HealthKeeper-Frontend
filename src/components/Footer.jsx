import React from "react";
import logo from "../assets/img/health-keeper-high-resolution-logo-transparent.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box" >
        <img src={logo} alt="" className="footer__logo" style={{padding: "1rem",backgroundColor: "white", borderRadius:"50%"}} />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="" className="footer__link">
                  {" "}
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Contact Us
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Carrers
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Privacy Policy
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by{" "}
            <a href="#" className="footer__link">
              Jonas Schmedtmann
            </a>{" "}
            for his online course{" "}
            <a href="#" className="footer__link">
              Advanced CSS and Sass
            </a>
            . Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use
            this webpage for both personal and commercial use, but NOT to claim
            it as your own design. A credit to the original author, Jonas
            Schmedtmann, is of course highly appreciated!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
