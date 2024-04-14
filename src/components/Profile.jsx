import { React, useState, useEffect, useContext, useRef } from "react";
import "../styles/profile.scss";
import img from "../assets/img/user-4.jpg";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import ReactCard from "../buildingblocks/ReactCard";
import {
  fetchUserProfile,
  fetchChronicConditions,
  deleteChronicCondition,
  addChronicCondition,
  updateUser,
} from "../services/UserProfileService";
import { userContext } from "../services/context";
const Profile = (props) => {
  const { user } = useContext(userContext);
  const [userData, setUserData] = useState({});
  const [reload, setReload] = useState(null);
  const name = useRef();
  const date = useRef();
  const description = useRef();

  const username = useRef();
  const bloodType = useRef();
  const height = useRef();
  const weight = useRef();
  const emergencyNumber = useRef();
  const mobileNumber = useRef();
  const email = useRef();
  const age = useRef(12);

  const formData = {
    fields: [
      { name: "name", type: "text" },
      { name: "date", type: "date" },
      { name: "description", type: "text" },
    ],
    refs: [name, date, description],
    user: user,
    fun: addChronicCondition,
  };

  const userFormData = {
    fields: [
      { name: "name", type: "text" },
      { name: "email", type: "email" },
      { name: "mobileNumber", type: "number" },
      { name: "EmergencyMobileNumber", type: "number" },
      { name: "weight", type: "number" },
      { name: "height", type: "number" },
      { name: "age", type: "number" },
      { name: "bloodType", type: "text" },
    ],
    refs: [
      username,
      email,
      mobileNumber,
      emergencyNumber,
      weight,
      height,
      bloodType,
      age
    ],
    user: user,
    userData: userData,
    fun: updateUser,
  };
  const currencies = [
    {
      value: "A-",
      label: "A-",
    },
    {
      value: "A+",
      label: "A+",
    },
    {
      value: "B-",
      label: "B-",
    },
    {
      value: "B+",
      label: "B+",
    },
    {
      value: "O-",
      label: "O-",
    },
    {
      value: "O+",
      label: "O+",
    },
    {
      value: "AB+",
      label: "AB+",
    },
    {
      value: "AB-",
      label: "AB-",
    },
  ];

  const chronicData = ["Chronic condition", "description", "date"];

  const [chronicConditions, setChronicConditions] = useState([{}]);

  function openPopup() {
    props.setDataToggle(formData);
    props.togglePopup(true);
  }
  function openPopup2() {
    props.setDataToggle(userFormData);
    props.togglePopup(true);
  }
  useEffect(() => {
    if (!user) {
      console.log("qweqwe");
      return;
    }

    fetchUserProfile(user).then((response) => {
     
      setUserData(response.data);
    });

    fetchChronicConditions(user).then((data) => {
      console.log(data.data);
      setChronicConditions(data.data);
    });
  }, [user]);

  useEffect(() => {}, [user]);

  function reloadPage() {
    alert("DELETED");
    setReload(Math.random());
  }

  return (
    <>
      <div style={{ position: "relative", height: 50 }}>
        <a
          onClick={openPopup2}
          className="btn btn--green  "
          style={{
            fontSize: 12,
            padding: "2rem",
            position: "absolute",
            right: 0,
          }}
        >
          Edit Profile
        </a>
      </div>
      <div className="profile">
        <div className="profile__image-box">
          <div className="profile__image-box-C">
            <div className="profile__image-box-C-photo">
              <img
                className="profile__image-box-C-photo-img"
                src={img}
                alt=""
              />
            </div>
            <h2 className="profile__image-box-C-name">{userData.name}</h2>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__info__form">
            <form action="" className="profile__info__form-form">
              <TextField
                id="outlined-select-currency"
                key={userData.bloodType}
                select
                defaultValue={userData.bloodType}
                sx={{
                  width: "30%",
                  color: "black",
                }}
                helperText="Please select blood type"
              >
                {currencies.map((option, index) => (
                  <MenuItem key={index} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                id="outlined-number"
                label="height"
                type="number"
                key={userData.height}
                defaultValue={userData.height}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="outlined-number"
                label="weight"
                type="number"
                key={userData.weight}
                defaultValue={userData.weight}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </div>
        </div>

        <div className="profile__personal-details">
          <div className="profile__personal-details-C">
            <h2 className="profile__personal-details-C-label">Email</h2>
            <p className="profile__personal-details-C-value">
              {userData.email}
            </p>
          </div>
          <div className="profile__personal-details-C">
            <h2 className="profile__personal-details-C-label">Mobile Number</h2>
            <p className="profile__personal-details-C-value">
              {userData.mobileNumber}
            </p>
          </div>
          <div className="profile__personal-details-C">
            <h2 className="profile__personal-details-C-label">
              Emergency Number
            </h2>
            <p className="profile__personal-details-C-value">
              {userData.EmergencyMobileNumber}
            </p>
          </div>

          <div className="profile__personal-details-C">
            <h2 className="profile__personal-details-C-label">
              Age
            </h2>
            <p className="profile__personal-details-C-value">
              {userData.age}
            </p>
          </div>
        </div>

        <div className="profile__medical-details">
          <div className="profile__medical-details-title">
            <h1>Chronic Condition</h1>
          </div>

          <div className="profile__medical-details-button">
            <a
              onClick={openPopup}
              className="btn btn--green  "
              style={{ fontSize: 12, padding: "2rem" }}
            >
              Add new entry
            </a>
          </div>

          {chronicConditions.map((condition) => {
            return (
              <div className="profile__medical-details-card">
                <ReactCard
                  key={condition.id}
                  id={condition.id}
                  name={condition.name}
                  description={condition.description}
                  date={condition.date}
                  deleteFun={deleteChronicCondition}
                  reload={reloadPage}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Profile;
