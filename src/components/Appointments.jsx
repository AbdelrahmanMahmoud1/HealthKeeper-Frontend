import { React, useState } from "react";
import "../styles/Documents.scss";
import Card from "../buildingblocks/Card";
import AppointmentCard from "../buildingblocks/AppointmentCard";

const Appointments = () => {
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

  return (
    <div className="documents">
      <div className="u-center-text ">
        <h2 className="heading-secondary"> Appointments</h2>
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
        <AppointmentCard appointment={appointmentData} />
      </div>
    </div>
  );
};

export default Appointments;
