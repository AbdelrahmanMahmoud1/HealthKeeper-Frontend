import React, { useEffect, useState } from "react";
import medicalRecordIcon from "../assets/img/istockphoto-1274833939-612x612.jpg";
import "../styles/Card.scss";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { fetchFilePath } from "../services/UserProfileService";
const Card = (props) => {
  const [path, setPath] = useState(null);

  useEffect(() => {
 
    setPath(props.url);
  }, []);

  function openFile() {
    window.open(path);
  }
  return (
    <div className="cards__card">
      <div onClick={openFile} className="cards__card__img"></div>
      <div className="cards__card__icons">
        <DeleteOutlineSharpIcon
          sx={{
            transform: "scale(1.5)",
            margin: "2rem",
            cursor: "pointer",
          }}
        />
      </div>

      <div className="cards__card__details">
        <h2 className="cards__card__details-title">
          Document name: {props.name}
        </h2>
        <span className="cards__card__details-date">Date: {props.date}</span>
      </div>
    </div>
  );
};

export default Card;
