import { React, useState, useEffect, useContext } from "react";
import "../styles/Documents.scss";
import Card from "../buildingblocks/Card";
import axios from "axios";
import {
  fetchUserDocuments,
  deleteDocument,
} from "../services/UserProfileService";
import { userContext } from "../services/context";
const MyDocuments = () => {
  const [file, setFile] = useState(null);
  const [documents, setDocuments] = useState([{}]);
  const [reload, setReload] = useState(null);

  const { user } = useContext(userContext);
  useEffect(() => {}, [file]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(file.name, file, user);
    try {
      await axios.post(
        "http://127.0.0.1:8000/api/mydocuments/upload/",
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
      );

      alert("File uploaded successfully");
      console.log("im here");
      setReload(Math.random());
    } catch (error) {
      alert("Error file");
    }
  };

  useEffect(() => {
    const fetchData = async (e) => {
      try {
        await fetchUserDocuments(user).then(
          (data) => {
            setDocuments(data.data);
          }
        );
      } catch (error) {}
    };
    fetchData();
  }, [file, reload]);

  return (
    <div className="documents">
      <div className="documents__title">
        <h1 className="documents__title-text">Documents</h1>
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
        {documents.map((doc) => {
          return (
            <div className="documents__cards-card">
              <Card
                key={doc.id}
                id={doc.id}
                date={doc.created}
                name={doc.name}
                url={doc.url}
                deleteFun={deleteDocument}
                reload={setReload}
                editable={true}
              />
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default MyDocuments;
