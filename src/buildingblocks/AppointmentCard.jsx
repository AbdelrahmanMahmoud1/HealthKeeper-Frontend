import { React, useEffect, useState } from "react";
import "../styles/MedicationCard.scss";
import medicalRecordIcon from "../assets/img/SVG/file-text2.svg";
import tablets from "../assets/img/vector-medical-icon-doctor-image-600nw-1170228883.webp";
import "../styles/AppointmentCard.scss";
const AppointmentCard = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.appointment);
  }, []);

  return (
  <>

      {data.map((data) => {
        return (
          <div className="appointment-items-item">
            <div className="appointment-items-item-Ctext">
              <div className="appointment-items-item-Ctext-C">
                <p className="appointment-items-item-Ctext-C-title">
                  Appointment Date
                </p>
                <span className="appointment-items-item-Ctext-C-time">
                  {data.time}
                </span>
              </div>
            </div>

            <div className="appointment-items-item-Cimg">
              <img
                src={tablets}
                alt=""
                className="appointment-items-item-Cimg-img"
              />
            </div>

            <div className="doctor-name">
              <p className="">{data.doctor}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AppointmentCard;
