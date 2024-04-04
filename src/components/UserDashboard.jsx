import { React, useEffect, useState } from "react";
import "../styles/dashboard.scss";
import medicalRecordIcon from "../assets/img/SVG/file-text2.svg";
import MedicationCard from "../buildingblocks/MedicationCard";
import AppointmentCard from "../buildingblocks/AppointmentCard";
import Card from "../buildingblocks/Card";
import Symptoms from "../buildingblocks/Symptoms";

const UserDashboard = () => {
  // let data = [];

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

  const [appointmentData, setAppointmentData] = useState([
    {
      id: 1,
      medicationName: "panadol",
      time: "Wed jun 20 - 7:00 PM",
      doctor: "Wael Farag",
    },
    {
      id: 2,
      medicationName: "panadol extra",
      time: "Wed jun 20 - 7:00 PM",
      doctor: "Wael Farag",
    },
    {
      id: 3,
      medicationName: "panadol extra",
      time: "Wed jun 20 - 7:00 PM",
      doctor: "Wael Farag",
    },
    {
      id: 3,
      medicationName: "panadol extra",
      time: "Wed jun 20 - 7:00 PM",
      doctor: "Wael Farag",
    },
  ]);

  // function add() {
  //   console.log(data);
  //   setData([]);
  // }

  return (
    <div className="dashboard">
      <div className="dashboard__medication">
        {data.length == 0 && (
          <div className="dashboard__medication-empty">
            <img
              src={medicalRecordIcon}
              alt=""
              className="dashboard__medication-empty-img"
            />
            <p className="dashboard__medication-empty-paragraph">
              No Data found
            </p>
          </div>
        )}

        <div className="u-center-text ">
          <h2 className="  heading-secondary"> Medications</h2>
        </div>

        <MedicationCard medication={data} />
      </div>
      <div className="dashboard__appointments">
        <div className="u-center-text ">
          <h2 className="heading-secondary"> appointments</h2>
        </div>
        <div className="appointment-items">
          <AppointmentCard appointment={appointmentData} />
        </div>
      </div>
      <div className="dashboard__documents">
        <div className="u-center-text ">
          <h2 className="heading-secondary"> Documents</h2>
        </div>
        <div className="cards">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="dashboard__symptoms">
        <div className="u-center-text" style={{ alignSelf: "flex-start" }}>
          <h2 className="heading-secondary">How do you feel today?</h2>
        </div>

        <div
          style={{
            display: "flex",
            gap: "0rem",
            flexWrap: "wrap",

            justifyContent: "center",
          }}
        >
          <Symptoms />
          <Symptoms />
          <Symptoms />
          <Symptoms />
          <Symptoms />
          <Symptoms />
          <Symptoms />
          <Symptoms />
          <Symptoms />
          <Symptoms />
          <Symptoms />
          <Symptoms />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
