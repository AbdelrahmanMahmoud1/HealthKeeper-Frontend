import React, { useState } from "react";
import "../styles/PopupCard.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";
const PopupCard = (props) => {
  const [data, setData] = useState([]);
  function closePopup() {
    props.togglePopup(false);
  }
  useEffect(() => {
    setData(props.chronicData);

    {
      data.map((info) => {
        {
          console.log(info);
        }
      });
    }
  }, [data]);

  return (
    <div className="popup">
      <div className="popup__content">
        <div onClick={closePopup}>
          <CloseIcon
            sx={{
              transform: "scale(1.5)",
              position: "absolute",
              margin: "2rem",
              top: 0,
              right: 0,
              cursor: "pointer",
            }}
          />
        </div>
        <div className="popup__content-fields" >
          <section className="section-book" style={{height: "100%"}}>
            <div
              className="row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                className="book"
                style={{
                  backgroundImage: "none",
                  flex: "1",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className="book__form">
                  <div className="u-margin-bottom-medium">
                    <h2
                      className="heading-secondary"
                      style={{ backgroundImage: "white", color: "white" }}
                    >
                      Add new entry
                    </h2>
                  </div>

                  <form action="#" className="form">
                    {data.map((info) => {
                      return (
                        <div className="form__group">
                          <input
                            id={info}
                            placeholder={info}
                            required
                            type="text"
                            className="form__input"
                          />
                          <label for="name" className="form__label">
                            {info}
                          </label>
                        </div>
                      );
                    })}

                    {/* <div className="form__group">
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
                  </div> */}
                    <div
                      className="forn__group"
                      style={{ display: "inline-block", marginRight: "2rem" }}
                    >
                      <button
                        className="btn btn--green"
                        style={{ backgroundColor: "white", color: "black" }}
                      >
                        Add &rarr;
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
