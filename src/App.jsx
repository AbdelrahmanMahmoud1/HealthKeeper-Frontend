import { useState, useEffect } from "react";
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



import { userContext } from "./services/context";
import Symptoms from "./components/SymptomsPage";
import SymptomsPage from "./components/SymptomsPage";

function App() {
  const [loggedIn, setloggedIn] = useState(true);
  const [togglePopup, setTogglePopup] = useState(false);
  const [chronicData, setChronicData] = useState([]);
  const [user, setUser] = useState("");
  const [request, setrequest] = useState("");

    useEffect(() => {
      if (localStorage.getItem("id")){
        setUser(localStorage.getItem("id"));
        let x = localStorage.getItem("id");
        console.log(x);
        
      }
    }, []);
    
  return (

 

    <userContext.Provider value={{user, setUser}}>
  
        <div className="container">
          {togglePopup && (
            <PopupCard
              togglePopup={setTogglePopup}
              chronicData={chronicData}
              request={request}
            />
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
                    <MainSection component={<MyDocuments />} />
                  ) : (
                    "login please"
                  )
                }
              />
              <Route
                path="/medications"
                element={
                  loggedIn ? (
                    <MainSection
                      component={
                        <Medications
                          togglePopup={setTogglePopup}
                          setDataToggle={setChronicData}
                          request={request}
                        />
                      }
                    />
                  ) : (
                    "login please"
                  )
                }
              />
              <Route
                path="/appointments"
                element={
                  loggedIn ? (
                    <MainSection
                      component={
                        <Appointments
                          togglePopup={setTogglePopup}
                          setDataToggle={setChronicData}
                          request={request}
                        />
                      }
                    />
                  ) : (
                    "login please"
                  )
                }
              />
              <Route
                path="/symptoms"
                element={
                  loggedIn ? (
                    <MainSection component={<SymptomsPage />} />
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
     
    </userContext.Provider>
  );
}

export default App;
