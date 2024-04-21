import { useEffect, React, useState, useRef, useContext } from "react";
import "../styles/Documents.scss";
import Card from "../buildingblocks/Card";
import AppointmentCard from "../buildingblocks/AppointmentCard";

import {
  fetchAppointments,
  deleteAppointments,
  addAppointments,
} from "../services/UserProfileService";
import { userContext } from "../services/context";
const Appointments = (props) => {
  const [appointmentData, setAppointmentData] = useState([]);

  const {user} = useContext(userContext);
  const [reload, setReload] = useState(null);
  const name = useRef();
  const time = useRef();
  const description = useRef();
  const DoctorName = useRef();

  const chronicData = {
    fields: [
      { name: "name", type: "text" },
      { name: "time", type: "date" },
      { name: "description", type: "text" },
      { name: "doctorName", type: "text" },
    ],
    refs: [name, time, description, DoctorName],
    user: user,
    fun: addAppointments,
  };
  useEffect(() => {
    if (!user){
      return
    }
    fetchAppointments(user).then((appointment) => {
      setAppointmentData([...appointment.data]);
    });
  }, [reload, user]);

  function reloadPage() {
    alert("DELETED");
    setReload(Math.random());
  }
  function openPopup() {
    props.setDataToggle(chronicData);
    props.togglePopup(true);
  }
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
          onClick={openPopup}
        >
          Add new entry
        </a>
      </div>
      {appointmentData ? (
        <div className="documents__cards">
          <AppointmentCard
            appointment={appointmentData}
            reload={reloadPage}
            deleteFun={deleteAppointments}
            editable = {true}
          />
        </div>
      ) : (
        <h1>asdasd</h1>
      )}
    </div>
  );
};

export default Appointments;
