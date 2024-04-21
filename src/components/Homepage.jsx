import logo from "../assets/img/health-keeper-high-resolution-logo-transparent.png";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import "../App.css";
import Sidebar from "./Sidebar";
import ApplicationInformation from "./ApplicationInformation";
import Features from "./Features";
import { useContext, useEffect, useState } from "react";
import { fetchUserProfile } from "../services/UserProfileService";
import { userContext } from "../services/context";
import medicalRecord from "../assets/img/pdf-file-icon-smartphone-screen_51635-2954.jpg";
import img2 from "../assets/img/info2.jpg";
import img3 from "../assets/img/info3.jpg";
import img4 from "../assets/img/stopwatch.svg";
import img5 from "../assets/img/calendar.svg";
import medicalRecordIcon from "../assets/img/SVG/file-text2.svg";



function Homepage() {
  const { user } = useContext(userContext);

  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (user) {
      fetchUserProfile(user).then((response) => {
        setUserData(response.data);
      });
    }
  }, [user]);

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
            {!user && (
              <>
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
              </>
            )}
          </div>
        </header>

        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <ApplicationInformation
            title={"Store Medical Documents"}
            desc={
              "With Health Keeper you can easily upload your medical documents safely and keep a full record of your prescriptions, diagnoses, X-ray images, lab results"
            }
            img={medicalRecord}
            icon={medicalRecordIcon}
          />
          <ApplicationInformation
            title={"Symptom Checker"}
            desc={
              "Get instant insights into your symptoms and possible diagnoses."
            }
            img={img2}
            icon={img4}
          />
          <ApplicationInformation
            title={"Medication Tracker  "}
            desc={
              "Stay on top of your medications with personalized reminders and refill alerts."
            }
            img={img3}
            icon={img5}
          />
        </div>

        <Features />
      </main>
    </div>
  );
}
export default Homepage;
