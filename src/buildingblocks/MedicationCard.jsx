import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "../styles/MedicationCard.scss";
import medicalRecordIcon from "../assets/img/SVG/file-text2.svg";
import tablets from "../assets/img/SVG/eyedropper.svg";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import EditSharpIcon from "@mui/icons-material/EditSharp";
const MedicationCard = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(props.medication);
  }, [props]);

  function deleteMedication(){

    props.deleteFun(data.id);
    props.reload();
  }

  return (
    <div className="medication-items">
      <div
        style={{ position: "absolute", top: 10, right: 20, zIndex: 1000 }}
        onClick={deleteMedication}
      >
        {props.editable && <DeleteOutlineSharpIcon
          sx={{
            transform: "scale(1.5)",
            margin: "2rem",
            cursor: "pointer",
            zIndex: 1001,
          }}
        />}
      </div>

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
            <h2 className="medication-items-item-Ctext-C-title">{data.name}</h2>
            <span className="medication-items-item-Ctext-C-time">
              {data.time}
            </span>
          </div>
          <p className="medication-items-item-Ctext-text">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MedicationCard;
