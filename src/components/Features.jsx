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

      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="col-1-of-4" s>
          <div className="feature-box" style={{ height: "40rem" }}>
        
            <h3 className="heading-tertiary u-margin-bottom-small">
              medication saving tool
            </h3>
            <p className="feature-box__text">
              "With our medication-saving tool, you can easily input and
              organize your medications, ensuring that you never miss a dose or
              refill. Say goodbye to the frustration of forgetting to take your
              medications"
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box" style={{ height: "40rem" }}>
       
            <h3 className="heading-tertiary u-margin-bottom-small">
              QR Code generation
            </h3>
            <p className="feature-box__text">
              "Your health information at your fingertips, accessible with a
              simple scan. Each account comes with a unique QR code, providing
              instant access to your medical information and chronic diseases
              for emergency situations"
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box" style={{ height: "40rem" }}>
           
            <h3 className="heading-tertiary u-margin-bottom-small">
              Appointments Reminder
            </h3>
            <p className="feature-box__text" >
              "Never miss an appointment again with our easy-to-use appointment
              management system. Stay organized and on top of your healthcare
              schedule."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
