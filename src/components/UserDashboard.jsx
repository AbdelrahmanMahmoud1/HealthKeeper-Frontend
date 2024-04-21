import { React, useEffect, useState, useContext } from "react";
import "../styles/dashboard.scss";
import medicalRecordIcon from "../assets/img/SVG/file-text2.svg";
import MedicationCard from "../buildingblocks/MedicationCard";
import AppointmentCard from "../buildingblocks/AppointmentCard";
import Card from "../buildingblocks/Card";
import Symptoms from "../buildingblocks/Symptoms";
import {
  fetchMedications,
  fetchAppointments,
  fetchUserDocuments,
} from "../services/UserProfileService";
import { userContext } from "../services/context";
const UserDashboard = () => {
  
  const {user} = useContext(userContext);
  const [medicationsData, setMedicationsData] = useState([]);
  const [appointmentData, setAppointmentData] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [done, setDone] = useState(false)

  useEffect(() => {

    if (!user){
      return
    }
    
    fetchMedications(user).then((mediactions) => {
      setMedicationsData(mediactions.data);
    });

    fetchAppointments(user).then((appointment) => {
      setAppointmentData([...appointment.data]);
    });

    const fetchData = async (e) => {
      try {
        await fetchUserDocuments(user).then(
          (data) => {
            setDocuments([...data.data]);
          }
        );
      } catch (error) {}
    };

    fetchData();
  }, [user]);

  return (
    <div className="dashboard">
      <div className="dashboard__medication">
        <div className="u-center-text ">
          <h2 className="  heading-secondary"> Medications</h2>
        </div>

        {medicationsData.length != 0 ? (
          <>
            {medicationsData.map((data, index) => {
              return (
                <MedicationCard
                  key={index}
                  medication={data}
                  editable={false}
                />
              );
            })}
          </>
        ) : (
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
      </div>
      <div className="dashboard__appointments">
        <div className="u-center-text ">
          <h2 className="heading-secondary"> appointments</h2>
        </div>
        <div className="appointment-items">
          {appointmentData.length != 0 ? (
            <>
              <AppointmentCard appointment={appointmentData} editable={false} />{" "}
            </>
          ) : (
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
        </div>
      </div>

      <div className="dashboard__documents">
        <div className="u-center-text ">
          <h2 className="heading-secondary"> Documents</h2>
        </div>
        <div className="cards">
          {documents.length != 0 ? (
            <>
              {documents.map((doc) => {
                return (
                  <div className="documents__cards-card">
                    <Card
                      key={doc.id}
                      id={doc.id}
                      date={doc.created}
                      name={doc.name}
                      url={doc.url}
                      editable={false}
                    />
                  </div>
                );
              })}
            </>
          ) : (
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
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
