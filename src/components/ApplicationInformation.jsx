import React, { useEffect, useState } from "react";
import "../styles/ApplicationInformation.scss";
import medicalRecord from "../assets/img/pdf-file-icon-smartphone-screen_51635-2954.jpg";
import medicalRecordIcon from "../assets/img/SVG/file-text2.svg";

const ApplicationInformation = (props) => {
 
  
  return (
    <div className="app-info"
     style={{
      width: "70%"
     }}>
      <div className="app-info__photo">
        <div className="app-info__photo-box">
          <img  src={props.img} alt="" className="app-info__photo-box-img" />
        </div>
      </div>
      <div className="app-info__info">
        <img src={props.icon} alt="" className="app-info__info-photo" />
        <h1 className="app-info__info-title">{props.title}</h1>
        <p className="app-info__info-paragraph">{props.desc}</p>
      </div>
    </div>
  );
};

export default ApplicationInformation;
