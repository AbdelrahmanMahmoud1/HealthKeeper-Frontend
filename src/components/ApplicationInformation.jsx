import React from "react";
import "../styles/ApplicationInformation.scss";
import medicalRecord from "../assets/img/pdf-file-icon-smartphone-screen_51635-2954.jpg";
import medicalRecordIcon from "../assets/img/SVG/file-text2.svg";

const ApplicationInformation = () => {
  return (
    <div className="app-info">
      <div className="app-info__photo">
        <div className="app-info__photo-box">
          <img src={medicalRecord} alt="" className="app-info__photo-box-img" />
        </div>
      </div>
      <div className="app-info__info">
        <img src={medicalRecordIcon} alt="" className="app-info__info-photo" />
        <h1 className="app-info__info-title">Store Medical Documents</h1>
        <p className="app-info__info-paragraph">
          With Health Keeper you can easily upload your medical documents safely
          and keep a full record of your prescriptions, diagnoses, X-ray images,
          lab results, etc.
        </p>
      </div>
    </div>
  );
};

export default ApplicationInformation;
