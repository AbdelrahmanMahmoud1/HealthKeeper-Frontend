import { React, useContext, useState, useRef } from "react";
import "../styles/Documents.scss";
import Card from "../buildingblocks/Card";
import MedicationCard from "../buildingblocks/MedicationCard";
import {
  fetchMedications,
  deleteMedication,
  addMedication,
} from "../services/UserProfileService";
import { useEffect } from "react";
import { userContext } from "../services/context";

const Medications = (props) => {
  const [data, setData] = useState([]);
  const { user } = useContext(userContext);
  const [reload, setReload] = useState(null);
  const name = useRef();
  const time = useRef();
  const description = useRef();

  const chronicData = {
    fields: [
      { name: "name", type: "text" },
      { name: "time", type: "date" },
      { name: "description", type: "text" },
    ],
    refs: [name, time, description],
    user: user,
    fun: addMedication,
  };
  useEffect(() => {
    if (user) {
      fetchMedications(user).then((mediactions) => {
        setData([...mediactions.data]);
      });
    }
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
        <h2 className="  heading-secondary"> Medications</h2>
      </div>
      <div className="profile__medical-details-button">
        <a
          className="btn btn--green  "
          style={{ fontSize: 12, padding: "2rem" }}
          onClick={openPopup}
        >
          Add new entry
        </a>
      </div>
      <div
        className="documents__cards"
        style={{ justifyContent: "space-evenly", flexWrap: "wrap" }}
      >
        {data&&
          data.map((medication) => {
  
            return (
              
              <div className="documents__cards-card" style={{ width: "80%" }}>
                <MedicationCard
                  reload={reloadPage}
                  deleteFun={deleteMedication}
                  medication={medication}
                  editable={true}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Medications;
