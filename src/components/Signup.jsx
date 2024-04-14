import { React, useEffect, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/FirebaseService";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { getUserId, createUser } from "../services/UserProfileService";
import { userContext } from "../services/context";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(userContext);

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        createUser({ email: user.email }).then(() => {
          console.log("im here");

          getUserId({ email: user.email }).then((id) => {
            console.log(id.data);
            setUser(id.data);
            localStorage.setItem("id", id.data);

            navigate("/dashboard");
            console.log(user);
          });
        });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <div className="u-margin-bottom-medium">
              <h2 className="heading-secondary">Sign up</h2>
            </div>

            <form className="form">
              <div className="form__group">
                <input
                  id="Email"
                  placeholder="Email"
                  required
                  type="email"
                  className="form__input"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label for="Email" className="form__label">
                  Email
                </label>
              </div>

              <div className="form__group">
                <input
                  id="Password"
                  placeholder="Password"
                  type="password"
                  required
                  className="form__input"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <label for="email" className="form__label">
                  Password
                </label>
              </div>

              <div className="form__group">
                <input
                  id="ConfirmPassword"
                  placeholder="ConfirmPassword"
                  type="password"
                  required
                  className="form__input"
                />
                <label for="email" className="form__label">
                  ConfirmPassword
                </label>
              </div>

              <div className="forn__group" style={{ display: "inline-block" }}>
                <NavLink to="/login">
                  <button className="btn btn--green">Login &rarr;</button>
                </NavLink>
                <button
                  className="btn btn--green"
                  type="submit"
                  onClick={onSubmit}
                >
                  Signup &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
