import React from "react";
import sneeze from "../assets/img/sneeze.png";
import "../styles/symptoms.scss";

const Symptoms = () => {
  return (
    <div className="symptoms-card">
      <ul className="symptoms-card__list">
        <li className="symptoms-card__list-item">
          <div className="symptoms-card__list-item-C">
            <img
              src={sneeze}
              alt=""
              className="symptoms-card__list-item-C-img"
            />
            <span className="symptoms-card__list-item-C-name">flu</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Symptoms;
