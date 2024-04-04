import React from "react";
import medicalRecordIcon from "../assets/img/istockphoto-1274833939-612x612.jpg";
import "../styles/Card.scss";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import EditSharpIcon from "@mui/icons-material/EditSharp";
const Card = () => {
  return (
    <div className="cards__card">
      <div className="cards__card__img"></div>
      <div className="cards__card__icons">
        <EditSharpIcon
          sx={{
            transform: "scale(1.5)",
            margin: "2rem",

            cursor: "pointer",
          }}
        />

        <DeleteOutlineSharpIcon
          sx={{
            transform: "scale(1.5)",
            margin: "2rem",
            cursor: "pointer",
          }}
        />
      </div>

      <div className="cards__card__details">
        <h2 className="cards__card__details-title">Document name: X-ray</h2>
        <span className="cards__card__details-date">Date: 4/2/2024</span>
      </div>
    </div>
  );
};

export default Card;
