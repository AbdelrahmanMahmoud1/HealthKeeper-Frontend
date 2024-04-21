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
    setData(props.chronicData.fields);
  }, [data]);

  function formatDate(text) {
    let date = new Date(text);

    // Extract individual components of the date and time
    let year = date.getUTCFullYear();
    let month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Month is zero-based, so we add 1
    let day = String(date.getUTCDate()).padStart(2, "0");
    let hours = String(date.getUTCHours()).padStart(2, "0");
    let minutes = String(date.getUTCMinutes()).padStart(2, "0");
    let seconds = String(date.getUTCSeconds()).padStart(2, "0");

    // Create the formatted date string
    let formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

    return formattedDate;
  }

  function request(event) {
    let object = {};
    props.chronicData.refs.map((ref) => {
      if (ref.current.name === "Date" || ref.current.name === "time") {
        object['time'] = formatDate(ref.current.value);
      } else {
        object[ref.current.name] = ref.current.value;
      }
    });
    object["userId"] = props.chronicData.user;
    console.log(object);
    props.chronicData.fun(object);
  }
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
        <div className="popup__content-fields">
          <section className="section-book" style={{ height: "100%" }}>
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
                  <div
                    className="u-margin-bottom-medium"
                    style={{ flex: "0 0 100%", textAlign: "center" }}
                  >
                    <h2
                      className="heading-secondary"
                      style={{ backgroundImage: "white", color: "white" }}
                    >
                      Add new entry
                    </h2>
                  </div>

                  <form
                    onSubmit={request}
                    className="form"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  >
                    {props.chronicData.userData ? (
                      <>
                        {data &&
                          data.map((info, index) => {
                            return (
                              <div
                                className="form__group"
                                style={{ flex: "0 0 50%" }}
                              >
                                <input
                                  id={info.name}
                                  name={info.name}
                                  placeholder={info.name}
                                  required
                                  type={info.type}
                                  className="form__input"
                                  ref={props.chronicData.refs[index]}
                                  defaultValue={
                                    props.chronicData.userData[info.name]
                                  }
                                />
                                <label for="name" className="form__label">
                                  {info.name}
                                </label>
                              </div>
                            );
                          })}
                      </>
                    ) : (
                      <>
                        {data &&
                          data.map((info, index) => {
                            return (
                              <div
                                className="form__group"
                                style={{ flex: "0 0 50%" }}
                              >
                                <input
                                  id={info.name}
                                  name={info.name}
                                  placeholder={info.name}
                                  required
                                  type={info.type}
                                  className="form__input"
                                  ref={props.chronicData.refs[index]}
                                />
                                <label for="name" className="form__label">
                                  {info.name}
                                </label>
                              </div>
                            );
                          })}
                      </>
                    )}

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
                      className="form__group"
                      style={{
                        display: "inline-block",
                        marginRight: "2rem",
                        flex: "0 0 46%",
                      }}
                    >
                      <button
                        className="btn btn--green"
                        type="submit"
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          width: "100%",
                          flex: "0 0 100%",
                        }}
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
