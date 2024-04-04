import { React, useState } from "react";
import "../styles/Documents.scss";
import Card from "../buildingblocks/Card";
import MedicationCard from "../buildingblocks/MedicationCard";

const Medications = () => {
      const [data, setData] = useState([
        {
          id: 1,
          medicationName: "panadol",
          time: "7:00 PM",
        },
        {
          id: 2,
          medicationName: "panadol extra",
          time: "7:00 PM",
        },
        {
          id: 3,
          medicationName: "panadol extra",
          time: "8:00 PM",
        },
        {
          id: 3,
          medicationName: "panadol extra",
          time: "8:00 PM",
        },
      ]);

  return (
    <div className="documents">
      <div className="u-center-text ">
        <h2 className="  heading-secondary"> Medications</h2>
      </div>
      <div className="profile__medical-details-button">
        <a
          href="#"
          className="btn btn--green  "
          style={{ fontSize: 12, padding: "2rem" }}
        >
          Add new entry
        </a>
      </div>
      <div className="documents__cards">
        <div className="documents__cards-card">
          <MedicationCard medication={data} />
        </div>
      </div>
    </div>
  );
};

export default Medications;
