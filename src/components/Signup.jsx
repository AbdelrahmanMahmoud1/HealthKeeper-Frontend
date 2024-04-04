import React from "react";

const Signup = () => {
  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <div className="u-margin-bottom-medium">
              <h2 className="heading-secondary">Sign up</h2>
            </div>

            <form action="#" className="form">
              <div className="form__group">
                <input
                  id="username"
                  placeholder="Username"
                  required
                  type="text"
                  className="form__input"
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
                <button className="btn btn--green">Signup &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
