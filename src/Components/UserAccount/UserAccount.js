import React, { useState, useEffect } from "react";

import axios from "axios";
import "./UserAccount.scss";

const UserAccount = (props) => {
  useEffect(() => {
    axios.get("/api/user").then((response) => {
      console.log(response);
      setFirstName(response.data.first_name);
      setLastName(response.data.last_name);
      setEmail(response.data.email);
      setPhoneNumber(response.data.phone_number);
      setSubscribedEmail(response.data.is_subscribed_email);
      setSubscribedText(response.data.is_subscribed_text);
    });
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [changePassword, setChangePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubEmail, setSubscribedEmail] = useState(false);
  const [isSubText, setSubscribedText] = useState(false);

  const [error, setError] = useState("");

  const handleSetFirstName = (e) => setFirstName(e.target.value);
  const handleSetLastName = (e) => setLastName(e.target.value);
  const handleSetEmail = (e) => setEmail(e.target.value);
  const handleSetPhoneNumber = (e) => setPhoneNumber(e.target.value);
  const handleChangePassword = (e) => setChangePassword(e.target.value);
  const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (changePassword === confirmPassword) {
      axios
        .put("/api/edituser", {
          email,
          password: changePassword,
          firstName,
          lastName,
          phoneNumber,
          isSubEmail,
          isSubText,
        })
        .then((response) => {
          console.log(response);
          alert("Your information has been updated and saved");
          props.history.push("/");
        });
    } else {
      setError("One of your passwords does not match");
    }
  };

  return (
    <div className="profileBody">
      <div className="profile">
        <header>
          <h1>Profile Information</h1>
        </header>
        <br></br>
        <div>
          <form onSubmit={handleSubmit} className="profile-information">
            <div style={{ display: "grid", width: "100px" }}>
              <label>First Name (optional) </label>
              <input
                value={firstName}
                title="First Name"
                onChange={handleSetFirstName}
              />
            </div>
            <br></br>
            <div style={{ display: "grid", width: "100px" }}>
              <label> Last Name (optional)</label>
              <input
                value={lastName}
                title="Last Name"
                onChange={handleSetLastName}
              />
            </div>
            <br></br>
            <div style={{ display: "grid", width: "100px" }}>
              <label> Email (required) </label>
              <input
                value={email}
                title="Email"
                placeholder="required"
                onChange={handleSetEmail}
              />
            </div>
            <br></br>
            <div style={{ display: "grid", width: "100px" }}>
              <label> Phone Number (optional)</label>
              <input
                value={phoneNumber}
                title="Phone Number"
                placeholder="optional"
                onChange={handleSetPhoneNumber}
              />
            </div>
            <br></br>

            <div style={{ display: "grid", width: "100px" }}>
              <label>Change Password</label>
              <input title="Change Password" onChange={handleChangePassword} />
            </div>
            <br></br>
            <div style={{ display: "grid", width: "100px" }}>
              <label>Confirm New Password</label>
              <input
                title="Confirm New Password"
                onChange={handleConfirmPassword}
              />
            </div>
            <br></br>

            <h2>--------Preferences-------</h2>

            <div className="promo-option">
              <input
                type="checkbox"
                id="accept"
                value={isSubEmail}
                checked={isSubEmail}
                onClick={() => setSubscribedEmail(!isSubEmail)}
              />
              <span>
                I would like to receive EMAILS about upcoming promotions and
                events
              </span>
            </div>

            {/* How to disable if no phone number is entered?  */}
            <div className="promo-option">
              <input
                type="checkbox"
                id="accept"
                checked={isSubText}
                value={isSubText}
                onClick={() => setSubscribedText(!isSubText)}
              />
              <span>
                I would like to receive TEXT messages about upcoming promotions
                and events
                {/* how to display message that updates are saved and redirect to home page */}
              </span>
            </div>
            <br></br>

            <button className="submit" type="submit">
              {" "}
              Save Updates{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
