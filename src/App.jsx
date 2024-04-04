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

function App() {
  const [loggedIn, setloggedIn] = useState(true);

  return (
    <div className="container">
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
                <MainSection component={<Profile />} />
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
