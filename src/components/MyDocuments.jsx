import React from "react";
import "../styles/Documents.scss";
import Card from "../buildingblocks/Card";

const MyDocuments = () => {
  return (
    <div className="documents">
      <div className="u-center-text ">
        <h2 className="heading-secondary"> Documents</h2>
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
        <div className="documents__cards-card">
          <Card />
        </div>

        <div className="documents__cards-card">
          <Card />
        </div>
        <div className="documents__cards-card">
          <Card />
        </div>

        <div className="documents__cards-card">
          <Card />
        </div>
        <div className="documents__cards-card">
          <Card />
        </div>
        <div className="documents__cards-card">
          <Card />
        </div>
        <div className="documents__cards-card">
          <Card />
        </div>
        <div className="documents__cards-card">
          <Card />
        </div>
        <div className="documents__cards-card">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default MyDocuments;
