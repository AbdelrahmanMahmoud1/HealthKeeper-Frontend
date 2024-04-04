import React from "react";
import medicalRecordIcon from "../assets/img/SVG/file-text2.svg";

const Features = () => {
  return (
    <section className="section-features">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary" style={{ color: "white" }}>
          Features
        </h2>
      </div>
      <i className="icon-basic-world"></i>

      <div className="row">
        <div className="col-1-of-4" s>
          <div className="feature-box" style={{ height: "40rem" }}>
            <img
              src={medicalRecordIcon}
              alt=""
              className="app-info__info-photo"
            />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Medical Documents Storage
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              voluptatem sed voluptatibus animi, voluptas ipsum corrupti.
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box" style={{ height: "40rem" }}>
            <img
              src={medicalRecordIcon}
              alt=""
              className="app-info__info-photo"
            />
            <h3 className="heading-tertiary u-margin-bottom-small">
              QR Code generation
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              voluptatem sed voluptatibus animi, voluptas ipsum corrupti.
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box" style={{ height: "40rem" }}>
            <img
              src={medicalRecordIcon}
              alt=""
              className="app-info__info-photo"
            />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Symptoms Detection
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              voluptatem sed voluptatibus animi, voluptas ipsum corrupti.
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box" style={{ height: "40rem" }}>
            <img
              src={medicalRecordIcon}
              alt=""
              className="app-info__info-photo"
            />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Appointments Reminder
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              voluptatem sed voluptatibus animi, voluptas ipsum corrupti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
