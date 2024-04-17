import React, { useEffect, useState } from "react";
import Symptoms from "../buildingblocks/Symptoms";
import "../styles/SymptomsPage.scss";
import { symptomsCheck } from "../services/UserProfileService";
const SymptomsPage = () => {
  const [displayResponse, setDisplayResponse] = useState("");
  const [completedTyping, setCompletedTyping] = useState(false);
  const [userSymptoms, setUserSymptoms] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  const symptomArrays = [
    {
      category: "General Symptoms",
      symptoms: [
        { symptom: "Itching", number: 1 },
        { symptom: "Hip joint pain", number: 2 },
        { symptom: "Muscle weakness", number: 2 },
        { symptom: "Painful walking", number: 2 },
        { symptom: "Pus filled pimples", number: 2 },
        { symptom: "Blackheads", number: 2 },
        { symptom: "Scurring", number: 2 },
        { symptom: "Silver like dusting", number: 2 },
        { symptom: "Small dents in nails", number: 2 },
        { symptom: "Inflammatory nails", number: 2 },
        { symptom: "Red sore around nose", number: 2 },
        { symptom: "Skin rash", number: 3 },
        { symptom: "Chills", number: 3 },
        { symptom: "Joint pain", number: 3 },
        { symptom: "Weight gain", number: 3 },
        { symptom: "Mood swings", number: 3 },
        { symptom: "Weight loss", number: 3 },
        { symptom: "Headache", number: 3 },
        { symptom: "Yellowish skin", number: 3 },
        { symptom: "Sunken eyes", number: 3 },
        { symptom: "Red spots over body", number: 3 },
        { symptom: "Lack of concentration", number: 3 },
        { symptom: "Visual disturbances", number: 3 },
        { symptom: "Loss of smell", number: 3 },
      ],
    },
    {
      category: "Digestive and Respiratory Issues",
      symptoms: [
        { symptom: "Nodal skin eruptions", number: 4 },
        { symptom: "Continuous sneezing", number: 4 },
        { symptom: "Ulcers on tongue", number: 4 },
        { symptom: "Muscle wasting", number: 4 },
        { symptom: "Acidity", number: 4 },
        { symptom: "Fatigue", number: 4 },
        { symptom: "Anxiety", number: 4 },
        { symptom: "Cough", number: 4 },
        { symptom: "Sweating", number: 4 },
        { symptom: "Dark urine", number: 4 },
        { symptom: "Loss of appetite", number: 4 },
        { symptom: "Pain behind the eyes", number: 4 },
        { symptom: "Back pain", number: 4 },
        { symptom: "Throat irritation", number: 4 },
        { symptom: "Watering from eyes", number: 4 },
        { symptom: "Polyuria", number: 4 },
        { symptom: "Mucoid sputum", number: 4 },
        { symptom: "Rusty sputum", number: 4 },
        { symptom: "Blister", number: 4 },
        { symptom: "Yellow crust ooze", number: 4 },
      ],
    },
    {
      category: "Systemic Discomfort",
      symptoms: [
        { symptom: "Shivering", number: 5 },
        { symptom: "Stomach pain", number: 5 },
        { symptom: "Vomiting", number: 5 },
        { symptom: "Cold hands and feets", number: 5 },
        { symptom: "Restlessness", number: 5 },
        { symptom: "Phlegm", number: 5 },
        { symptom: "Runny nose", number: 5 },
        { symptom: "Congestion", number: 5 },
        { symptom: "Fast heart rate", number: 5 },
        { symptom: "Pain during bowel movements", number: 5 },
        { symptom: "Swollen legs", number: 5 },
        { symptom: "Swollen blood vessels", number: 5 },
        { symptom: "Puffy face and eyes", number: 5 },
        { symptom: "Palpitations", number: 5 },
      ],
    },
    {
      category: "Urinary and Gastrointestinal Issues",
      symptoms: [
        { symptom: "Burning micturition", number: 6 },
        { symptom: "Spotting urination", number: 6 },
        { symptom: "Indigestion", number: 6 },
        { symptom: "Diarrhoea", number: 6 },
        { symptom: "Irregular sugar level", number: 6 },
        { symptom: "Mild fever", number: 6 },
        { symptom: "Yellow urine", number: 6 },
        { symptom: "Yellowing of eyes", number: 6 },
        { symptom: "Acute liver failure", number: 6 },
        { symptom: "Fluid overload", number: 6 },
        { symptom: "Swelling of stomach", number: 6 },
        { symptom: "Swelled lymph nodes", number: 6 },
        { symptom: "Malaise", number: 6 },
        { symptom: "Abnormal menstruation", number: 6 },
        { symptom: "Dischromic patches", number: 6 },
        { symptom: "Continuous feel of urine", number: 6 },
        { symptom: "Pain in anal region", number: 6 },
        { symptom: "Irritation in anus", number: 6 },
        { symptom: "Distention of abdomen", number: 6 },
        { symptom: "Stomach bleeding", number: 6 },
        { symptom: "History of alcohol consumption", number: 6 },
        { symptom: "Blood in sputum", number: 6 },
        { symptom: "Prominent veins on calf", number: 6 },
      ],
    },
    {
      category: "Severe Symptoms",
      symptoms: [
        { symptom: "High fever", number: 7 },
        { symptom: "Chest pain", number: 7 },
        { symptom: "Weakness in limbs", number: 7 },
        { symptom: "Coma", number: 7 },
        { symptom: "Prognosis", number: 7 },
      ],
    },
    // Add more categories as needed
  ];
  const [chatHistory, setChatHistory] = useState([
    {
      content: "",
    },
  ]);
  useEffect(() => {
    setCompletedTyping(false);

    let i = 0;
    const stringResponse = chatHistory[chatHistory.length - 1].content;

    const intervalId = setInterval(() => {
      setDisplayResponse(stringResponse.slice(0, i));

      i++;

      if (i > stringResponse.length) {
        clearInterval(intervalId);
        setCompletedTyping(true);
      }
    }, 20);

    return () => clearInterval(intervalId);
  }, [chatHistory]);

  useEffect(() => {
    console.log(userSymptoms);
  }, [userSymptoms]);

  function check() {
    let obj = {
      symptoms: userSymptoms,
    };

    symptomsCheck(obj).then((res) => {
      setChatHistory([
        {
          content: res.data,
        },
      ]);
    });
  }
  return (
    <div className="dashboard__symptoms">
      <div
        className="u-center-text"
        style={{ alignSelf: "center", flex: "0 0 100%" }}
      >
        <h2 className="heading-secondary">How do you feel today?</h2>
        <h3>
          <br />
          Please select at maximum 17 symptoms
        </h3>
      </div>

      <div className="symptoms-grid">
        <div className="symptoms-grid-container1 symptoms-grid-item">
          <h1
            style={{
              flex: "0 0 100%",
              textAlign: "center",
            }}
          >
            {symptomArrays[0].category}
          </h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "3rem",
              justifyContent: "space-evenly",
            }}
          >
            {symptomArrays[0].symptoms.map((symptoms) => {
              return (
                <Symptoms
                  array={userSymptoms}
                  addSymptom={setUserSymptoms}
                  name={symptoms}
                />
              );
            })}
          </div>
        </div>
        <div className="symptoms-grid-container2 symptoms-grid-item">
          <h1
            style={{
              flex: "0 0 100%",
              flexWrap: "wrap",
              textAlign: "center",
            }}
          >
            {symptomArrays[1].category}
          </h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "3rem",
              justifyContent: "space-evenly",
            }}
          >
            {symptomArrays[1].symptoms.map((symptoms) => {
              return (
                <Symptoms
                  addSymptom={setUserSymptoms}
                  name={symptoms}
                  array={userSymptoms}
                />
              );
            })}
          </div>
        </div>
        <div className="symptoms-grid-container3 symptoms-grid-item">
          <h1
            style={{
              flex: "0 0 100%",
              flexWrap: "wrap",
              textAlign: "center",
            }}
          >
            {symptomArrays[2].category}
          </h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "3rem",
              justifyContent: "space-evenly",
            }}
          >
            {symptomArrays[2].symptoms.map((symptoms) => {
              return (
                <Symptoms
                  addSymptom={setUserSymptoms}
                  name={symptoms}
                  array={userSymptoms}
                />
              );
            })}
          </div>
        </div>
        <div className="symptoms-grid-container4 symptoms-grid-item">
          <h1
            style={{
              flex: "0 0 100%",
              textAlign: "center",
              flexWrap: "wrap",
            }}
          >
            {symptomArrays[3].category}
          </h1>

          <div
            style={{
              display: "flex",
              gap: "3rem",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            {symptomArrays[3].symptoms.map((symptoms) => {
              return (
                <Symptoms
                  addSymptom={setUserSymptoms}
                  name={symptoms}
                  array={userSymptoms}
                />
              );
            })}
          </div>
        </div>
        <div className="symptoms-grid-container5 symptoms-grid-item">
          <h1
            style={{
              flex: "0 0 100%",
              textAlign: "center",
            }}
          >
            {symptomArrays[4].category}
          </h1>
          <div
            style={{
              display: "flex",
              gap: "3rem",
              flexWrap: "wrap",
              flex: "0 0 100%",
              justifyContent: "space-evenly",
            }}
          >
            {symptomArrays[4].symptoms.map((symptoms) => {
              return (
                <Symptoms
                  addSymptom={setUserSymptoms}
                  name={symptoms}
                  array={userSymptoms}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* <div
        style={{
          display: "flex",
          gap: "0rem",
          flexWrap: "wrap",
          flex: " 0 0 100%",
          justifyContent: "center",
        }}
      >
        {symptoms.map((symptom) => {
         
        })}
      </div> */}

      <div
        style={{
          backgroundColor: "black",
          color: "white",
          maxWidth: "90rem",
          alignSelf: "center",
          overflowWrap: "break-word",
          overflow: "hidden",
        }}
      >
        <span style={{ textWrap: "wrap", fontSize: "2rem" }}>
          {displayResponse}
          {!completedTyping && (
            <>
              <svg
                viewBox="8 4 8 16"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor"
              >
                <rect x="10" y="6" width="4" height="12" fill="#fff" />
              </svg>
            </>
          )}
        </span>
      </div>
      <div className="profile__medical-details-button">
        <a
          onClick={check}
          className="btn btn--green  "
          style={{ fontSize: 12, padding: "2rem", flex: "0 0 100%" }}
        >
          Check
        </a>
      </div>
    </div>
  );
};

export default SymptomsPage;
