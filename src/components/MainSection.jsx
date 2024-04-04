import { useState } from "react";
import UserDashboard from "./UserDashboard";
import Sidebar from "./Sidebar";
import "../styles/MainSection.scss";
import logo from "../assets/img/health-keeper-high-resolution-logo-transparent.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const MainSection = ({component }) => {
  return (
    <div className="main-user-section">
      <div className="main-user-section__sidebar">
        <Sidebar />
      </div>

      <div className="main-user-section__main">
       
      
       
        {component}

      </div>
    </div>
  );
};

export default MainSection;
