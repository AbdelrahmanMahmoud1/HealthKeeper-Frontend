import { React, useState, useEffect } from "react";
import "../styles/profile.scss";
import img from "../assets/img/user-4.jpg";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ReactCard from "../buildingblocks/ReactCard";
import PopupCard from "../buildingblocks/PopupCard";
import { fetchUserProfile } from "../services/UserProfileService";
const Profile = (props) => {
  const [user, setUser] = useState({});

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

  function openPopup() {
    props.setDataToggle(chronicData);
    props.togglePopup(true);
  }

  useEffect(() => {
    service.fetchUserProfile("773bce3d-0419-4f64-9a36-5e726a3a2e68").then((response) => {
      setUser(response.data);
    });

  }, []);

  useEffect(() => {
  
 
  }, [user])
  



  return (
    <>
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
            <h2 className="profile__image-box-C-name">{user.name}</h2>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__info__form">
            <form action="" className="profile__info__form-form">
              <TextField
                id="outlined-select-currency"
                key={user.bloodType}
                select
                defaultValue={user.bloodType}
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
                key={user.height}
                defaultValue={user.height}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="outlined-number"
                label="weight"
                type="number"
                key={user.weight}
                defaultValue={user.weight}
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
            <p className="profile__personal-details-C-value">{user.email}</p>
          </div>
          <div className="profile__personal-details-C">
            <h2 className="profile__personal-details-C-label">Mobile Number</h2>
            <p className="profile__personal-details-C-value">
              {user.mobileNumber}
            </p>
          </div>
          <div className="profile__personal-details-C">
            <h2 className="profile__personal-details-C-label">
              Emergency Number
            </h2>
            <p className="profile__personal-details-C-value">
              {user.EmergencyMobileNumber}
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
              href="#"
              className="btn btn--green  "
              style={{ fontSize: 12, padding: "2rem" }}
            >
              Add new entry
            </a>
          </div>

          <div className="profile__medical-details-card">
            <ReactCard name="asdasd" />
          </div>
          <div className="profile__medical-details-card">
            <ReactCard />
          </div>
          <div className="profile__medical-details-card">
            <ReactCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
