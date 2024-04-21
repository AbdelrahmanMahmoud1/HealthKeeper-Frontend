import React from "react";
import logo from "../assets/img/health-keeper-high-resolution-logo-transparent.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img
          src={logo}
          alt=""
          className="footer__logo"
          style={{
            padding: "1rem",
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="" className="footer__link">
                  Contact Us
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
            Get Started Today: Sign up for free and take the first step towards
            better health management! we understand the importance of medication
            adherence in achieving optimal health outcomes. That's why our
            medication-saving feature is designed to be intuitive,
            user-friendly, and effective. Join us today and experience the
            convenience and peace of mind that comes with effortless medication
            management
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
