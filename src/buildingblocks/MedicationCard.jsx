import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "../styles/MedicationCard.scss";
import medicalRecordIcon from "../assets/img/SVG/file-text2.svg";
import tablets from "../assets/img/SVG/eyedropper.svg";

const MedicationCard = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.medication);
  }, []);

  return (
    <div className="medication-items">
 


     

      {data.map((data) => {
        return (
          <div className="medication-items-item">
            <div className="medication-items-item-Cimg">
              <img
                src={tablets}
                alt=""
                className="medication-items-item-Cimg-img"
              />
            </div>
            <div className="medication-items-item-Ctext">
              <div className="medication-items-item-Ctext-C">
                <h2 className="medication-items-item-Ctext-C-title">
                  {data.medicationName}
                </h2>
                <span className="medication-items-item-Ctext-C-time">
                  {data.time}
                </span>
              </div>

              <p className="medication-items-item-Ctext-text">
                1 spray, 1time a day, daily, ongoing
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MedicationCard;
