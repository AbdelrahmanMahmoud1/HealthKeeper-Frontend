import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "../styles/MedicationCard.scss";
import tablets from "../assets/img/SVG/eyedropper.svg";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";


const Qrcodecard = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(props.medication);
  }, [props]);

  function deleteMedication() {
    props.deleteFun(data.id);
    props.reload();
  }

  return (
    <div className="medication-items">
      <div
        style={{ position: "absolute", top: 10, right: 20, zIndex: 1000 }}
        onClick={deleteMedication}
      >
        {props.editable && (
          <DeleteOutlineSharpIcon
            sx={{
              transform: "scale(1.5)",
              margin: "2rem",
              cursor: "pointer",
              zIndex: 1001,
            }}
          />
        )}
      </div>

      <div className="medication-items-item" style={{
        justifyContent: "center"
      }}>
        <div className="medication-items-item-Cimg" style={{
          alignSelf: "flex-start",
        }}>
          <img
            src={tablets}
            alt=""
            className="medication-items-item-Cimg-img"
          />
        </div>
        <div className="medication-items-item-Ctext">
          <div className="medication-items-item-Ctext-C">
            <h2 className="medication-items-item-Ctext-C-title">
              Name: {data.name}
            </h2>
            <span className="medication-items-item-Ctext-C-time">
              Email : {data.email}
            </span>
          </div>
          <h3
            className="medication-items-item-Ctext-text"
            style={{ flex: " 0 0 100%" }}
          >
            Age: {data.age} <br /> Number: {data.mobileNumber} <br /> Emergyncy
            Number: {data.EmergencyMobileNumber} <br /> Blood Type:{" "}
            {data.bloodType}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Qrcodecard;
