import React, { useEffect, useState } from "react";
import "../styles/Card.scss";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";

const Card = (props) => {
  const [path, setPath] = useState(null);

  useEffect(() => {
 
    setPath(props.url);
  }, []);

  function openFile() {
    window.open(path);
  }
  function deleteDocument(){
    props.deleteFun(props.id).then(()=> {
      alert("DELETED")
      props.reload(Math.random())
    });
  }
  return (
    <div className="cards__card">
      <div onClick={openFile} className="cards__card__img"></div>
      <div className="cards__card__icons" onClick={deleteDocument}>
        {props.editable&& <DeleteOutlineSharpIcon
        
          sx={{
            transform: "scale(1.5)",
            margin: "2rem",
            cursor: "pointer",
          }}
          
        />}
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
