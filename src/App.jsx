import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MainSection from "./components/MainSection";
import Profile from "./components/Profile";
import UserDashboard from "./components/UserDashboard";
import MyDocuments from "./components/MyDocuments";
import Medications from "./components/Medications";
import Appointments from "./components/Appointments";
import PopupCard from "./buildingblocks/PopupCard";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

function App() {
  const [loggedIn, setloggedIn] = useState(true);
  const [togglePopup, setTogglePopup] = useState(false);
  const [chronicData, setChronicData] = useState([]);
const firebaseConfig = {
  apiKey: "AIzaSyBPvnhrqHg7Z0yDAH3eT3TTjKgiy9br_3o",
  authDomain: "first-data-base-94a72.firebaseapp.com",
  databaseURL: "https://first-data-base-94a72-default-rtdb.firebaseio.com",
  projectId: "first-data-base-94a72",
  storageBucket: "first-data-base-94a72.appspot.com",
  messagingSenderId: "230595747981",
  appId: "1:230595747981:web:b371d7281bf611f5e402c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();
const storageRef = ref(storage);

  return (

    
    <div className="container">
      {togglePopup && (
        <PopupCard togglePopup={setTogglePopup} chronicData={chronicData} />
      )}
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/mydocuments"
            element={
              loggedIn ? (
                <MainSection component={<MyDocuments storage = {storage} />} />
              ) : (
                "login please"
              )
            }
          />
          <Route
            path="/medications"
            element={
              loggedIn ? (
                <MainSection component={<Medications />} />
              ) : (
                "login please"
              )
            }
          />
          <Route
            path="/appointments"
            element={
              loggedIn ? (
                <MainSection component={<Appointments />} />
              ) : (
                "login please"
              )
            }
          />
          <Route
            path="/symptoms"
            element={
              loggedIn ? (
                <MainSection component={<UserDashboard />} />
              ) : (
                "login please"
              )
            }
          />
          <Route
            path="/profile"
            element={
              loggedIn ? (
                <MainSection
                  component={
                    <Profile
                      togglePopup={setTogglePopup}
                      setDataToggle={setChronicData}
                      
                    />
                  }
                />
              ) : (
                "login please"
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              loggedIn ? (
                <MainSection component={<UserDashboard />} />
              ) : (
                "login please"
              )
            }
          />
          <Route path="*" element={"Not Found"} />
        </Routes>
      </BrowserRouter>

      {<Footer />}
    </div>
  );
}

export default App;
