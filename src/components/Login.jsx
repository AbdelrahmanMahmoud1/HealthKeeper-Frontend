import React, { useEffect, useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/FirebaseService";
import { NavLink, useNavigate } from "react-router-dom";
import { userContext } from "../services/context";
import { getUserId } from "../services/UserProfileService";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(userContext);
  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.email);

        getUserId({"email":user.email}).then((id) => {
          console.log(id.data);
          setUser(id.data);
          navigate("/dashboard");
          console.log(user);
          localStorage.setItem("id", id.data);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <div className="u-margin-bottom-medium">
              <h2 className="heading-secondary">Login</h2>
            </div>

            <form action="#" className="form">
              <div className="form__group">
                <input
                  id="Email"
                  placeholder="Email"
                  required
                  type="email"
                  className="form__input"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label for="name" className="form__label">
                  username
                </label>
              </div>

              <div className="form__group">
                <input
                  id="Password"
                  placeholder="Password"
                  type="password"
                  required
                  className="form__input"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label for="email" className="form__label">
                  Password
                </label>
              </div>

              <div
                className="forn__group"
                style={{ display: "inline-block", marginRight: "2rem" }}
              >
                <button className="btn btn--green" onClick={onLogin}>
                  Login &rarr;
                </button>
              </div>
              <div className="forn__group" style={{ display: "inline-block" }}>
                <NavLink to="/signup">
                  <button className="btn btn--green">Signup &rarr;</button>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
