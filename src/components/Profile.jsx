import React from "react";
import "../styles/profile.scss";
import img from "../assets/img/user-4.jpg";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ReactCard from "../buildingblocks/ReactCard";
const Profile = () => {
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
  return (
    <div className="profile">
      <div className="profile__image-box">
        <div className="profile__image-box-C">
          <div className="profile__image-box-C-photo">
            <img className="profile__image-box-C-photo-img" src={img} alt="" />
          </div>
          <h2 className="profile__image-box-C-name">Mohamed abdullah</h2>
        </div>
      </div>
      <div className="profile__info">
        <div className="profile__info__form">
          <form action="" className="profile__info__form-form">
            <TextField
              id="outlined-select-currency"
              select
              label="Blood Type"
              defaultValue="None"
              sx={{
                width: "30%",
              }}
              helperText="Please select blood type"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              select
              label="Blood Type"
              defaultValue="None"
              sx={{
                width: "30%",
              }}
              helperText="Please select blood type"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              select
              label="Blood Type"
              defaultValue="None"
              sx={{
                width: "30%",
              }}
              helperText="Please select blood type"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </form>
        </div>
      </div>

      <div className="profile__personal-details">
        <div className="profile__personal-details-C">
          <h2 className="profile__personal-details-C-label">Email</h2>
          <p className="profile__personal-details-C-value">Email</p>
        </div>
        <div className="profile__personal-details-C">
          <h2 className="profile__personal-details-C-label">Email</h2>
          <p className="profile__personal-details-C-value">Email</p>
        </div>
        <div className="profile__personal-details-C">
          <h2 className="profile__personal-details-C-label">Email</h2>
          <p className="profile__personal-details-C-value">Email</p>
        </div>
        <div className="profile__personal-details-C">
          <h2 className="profile__personal-details-C-label">Email</h2>
          <p className="profile__personal-details-C-value">Email</p>
        </div>
      </div>

      <div className="profile__medical-details">
        <div className="profile__medical-details-title">
          <h1>Chronic Condition</h1>
        </div>

        <div className="profile__medical-details-button">
          <a href="#" className="btn btn--green  " style={{fontSize: 12, padding: "2rem"}}>
            Add new entry
          </a>
        </div>

        <div className="profile__medical-details-card">
          <ReactCard />
        </div>
        <div className="profile__medical-details-card">
          <ReactCard />
        </div>
        <div className="profile__medical-details-card">
          <ReactCard />
        </div>
      </div>
    </div>
  );
};

export default Profile;
