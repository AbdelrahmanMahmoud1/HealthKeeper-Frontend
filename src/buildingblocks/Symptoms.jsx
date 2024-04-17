import React, { useState } from "react";
import sneeze from "../assets/img/sneeze.png";
import "../styles/symptoms.scss";

const Symptoms = (props) => {
  const [isCLicked, setIsCLicked] = useState(false);
  const [index, setIndex] = useState(-1);
  const clickedStyle = {
    backgroundImage: isCLicked
      ? "linear-gradient(to right bottom, var(--color-Grey-dark-1), #28b485)"
      : "linear-gradient(to right bottom,grey, white)",
    color: isCLicked ? "white" : "black",
    transform: isCLicked ? "translateY(-2rem)" : "translateY(0rem)",
    boxShadow: isCLicked ? "0 2rem 2rem grey" : "",
    transition: "all ease-in 0.2s",
  };
  return (
    <div className="symptoms-card">
      <ul className="symptoms-card__list">
        <li className="symptoms-card__list-item">
          <div
            className="symptoms-card__list-item-C"
            style={clickedStyle}
            onClick={() => {
              setIsCLicked((prevState) => !prevState);
              if (isCLicked) {
                var arr = props.array;
                arr[index] = 0;
                props.addSymptom(arr);

              } else {
                if (props.array.includes(0)) {
                  var numbers = props.array.filter((number) => number !== 0);
                  setIndex(numbers.length);
                  const indexOfZero = props.array.indexOf(0);
                  var arr = props.array;
                  if (indexOfZero !== -1) {
                    arr[indexOfZero] = props.name.number; // Replace newValue with the value you want to replace 0 with
                  }
                  props.addSymptom(arr);
                } else {
                  alert("You Reached the maximum number of symptoms");
                }
              }
            }}
          >
            <img
              src={sneeze}
              alt=""
              className="symptoms-card__list-item-C-img"
            />
            <span className="symptoms-card__list-item-C-name">
              {props.name.symptom}
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Symptoms;
