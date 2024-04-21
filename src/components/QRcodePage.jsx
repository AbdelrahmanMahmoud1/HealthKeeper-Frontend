import React, { useContext, useEffect, useState, useRef } from "react";
import QRCode from "react-qr-code";
import axios from "axios";

import { userContext } from "../services/context";
import {
  fetchUserProfile,
  fetchChronicConditions,
} from "../services/UserProfileService";
import Qrcodecard from "../buildingblocks/Qrcodecard";
import ReactCard from "../buildingblocks/ReactCard";
import { useReactToPrint } from "react-to-print";
import { usePDF } from "react-to-pdf";

const QRcodePage = () => {
  const { user } = useContext(userContext);
  const [userData, setUserData] = useState({});
  const [chronicConditions, setChronicConditions] = useState([{}]);
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const [file, setFile] = useState(null);

  useEffect(() => {}, [file]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append(file.name, file, user);

    try {
      console.log(file);

      await axios.post(
        "http://127.0.0.1:8000/api/mydocuments/upload/qr",
        {
          name: file.name,
          file: file,
          userId: user,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      ).then((data)=> {
        console.log(data);
      });

      alert("File uploaded successfully");
    } catch (error) {
      alert("Error file");
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) {
      return;
    }

    fetchUserProfile(user).then((response) => {
      setUserData(response.data);
    });

    fetchChronicConditions(user).then((data) => {
      setChronicConditions(data.data);
    });
  }, [user]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "2rem",
          gap: "2rem",
          justifyContent: "center",
          height: "100vh"
        }}
        ref={targetRef}
      >
        <div
          style={{
            flex: "0 0 100%",
          }}
        >
          <Qrcodecard medication={userData} editable={false} />
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
                editable={false}
              />
            </div>
          );
        })}
      </div>

      <div className="profile__medical-details-button">
        <a
          className="btn btn--green  "
          style={{ fontSize: 12, padding: "2rem", margin: 6 }}
          onClick={() => toPDF()}
        >
          Download Your QRcode Page
        </a>

        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} />
          <button type="submit">Upload</button>
        </form>
      </div>
    </>
  );
};

export default QRcodePage;
