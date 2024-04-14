import { React, useEffect, useState } from "react";
import "../styles/MedicationCard.scss";
import medicalRecordIcon from "../assets/img/SVG/file-text2.svg";
import tablets from "../assets/img/vector-medical-icon-doctor-image-600nw-1170228883.webp";
import "../styles/AppointmentCard.scss";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";

const AppointmentCard = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.appointment);
  }, [props]);

 function deleteAppointment(index) {
  console.log(data);
   props.deleteFun(data[index].id);
   props.reload();
 }

  return (
    <>
      {data.map((data, index) => {
        return (
          <div className="appointment-items-item" style={{position: "relative"}}>
            <div
              style={{ position: "absolute", top: 10, right: 20, zIndex: 100000 }}
              onClick={()=> {deleteAppointment(index)}}
            >
              <DeleteOutlineSharpIcon
                sx={{
                  transform: "scale(1.5)",
                  margin: "2rem",
                  cursor: "pointer",
                  zIndex: 1001,
                }}
              />
            </div>
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
              <h4 className="">Doctor Name: </h4>
            </div>

            <div className="doctor-name">
              <p className="">{data.doctorName}</p>
            </div>
            <div class="break" style={{ flexBasis: "100%", height: 0 }}></div>
            <div className="doctor-name">
              <h4 className="">Descriptions: </h4>
            </div>
            <div
              className="doctor-name"
              style={{ flex: 1, textAlign: "center" }}
            >
              <p className="">{data.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AppointmentCard;
