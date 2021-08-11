import React, { useState } from "react";
import axios from "axios";
import "./Register.scss";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubEmail, setSubEmail] = useState(false);
  const [isSubText, setSubText] = useState(false);
  const [error, setError] = useState("");

  const handleSetUsername = (e) => setUsername(e.target.value);
  const handleSetEmail = (e) => setEmail(e.target.value);
  const handleSetPassword = (e) => setPassword(e.target.value);
  const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);
  const handleSetFirstName = (e) => setFirstName(e.target.value);
  const handleSetLastName = (e) => setLastName(e.target.value);
  const handleSetPhoneNumber = (e) => setPhoneNumber(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      axios
        .post("/auth/register", {
          username,
          email,
          password,
          firstName,
          lastName,
          phoneNumber,
          isSubEmail,
          isSubText,
        })
        .then((response) => {
          console.log(response);
          alert(
            "You have successfully registered! Login to your account to make a future reservation"
          );
          props.history.push("/login");
        })
        .catch((response) => {
          console.log(response);
          alert("That username or email has been taken. Please try another");
        });
    } else {
      setError("One of your passwords does not match");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <h2 className="page-header">
        Create an account to make future reservations quick and easy. Also to
        sign up for future promotions and upcoming events
      </h2>
      {/* How do I get the text to be ABOVE the input line?  */}
      <br></br>
      <form onSubmit={handleSubmit} className="registration-form">
        <div style={{ display: "grid", width: "100px" }}>
          <label> Create Username</label>
          <input title="Create Username" onChange={handleSetUsername} />
        </div>
        <br></br>
        <div style={{ display: "grid", width: "100px" }}>
          <label> Email </label>
          <input title="Email" onChange={handleSetEmail} />
        </div>

        <br></br>
        <div style={{ display: "grid", width: "100px" }}>
          <label> Create Password</label>
          <input title="Create Password" onChange={handleSetPassword} />
        </div>
        <br></br>
        <div style={{ display: "grid", width: "100px" }}>
          <label> Confirm Password</label>
          <input title="Comfirm Password" onChange={handleConfirmPassword} />
        </div>
        <br></br>

        <div style={{ display: "grid", width: "100px" }}>
          <label> First Name* (optional) </label>
          <input title="First Name" onChange={handleSetFirstName} />
        </div>
        <br></br>

        <div style={{ display: "grid", width: "100px" }}>
          <label> Last Name* (optional) </label>
          <input title="Last Name" onChange={handleSetLastName} />
        </div>
        <br></br>
        <div style={{ display: "grid", width: "100px" }}>
          <label> Phone Number* (optional) </label>
          <input title="Phone Number" onChange={handleSetPhoneNumber} />
        </div>
        <br></br>
        {/* How do I create a field for the title for the checked box?  */}
        <div>
          <input
            type="checkbox"
            id="accept"
            onClick={() => setSubEmail(!isSubEmail)}
          />
          <span>
            I would like to receive EMAILS about upcoming promotions and events
          </span>
        </div>
        <div>
          <input
            type="checkbox"
            id="accept"
            onClick={() => setSubText(!isSubText)}
          />
          <span>
            I would like to receive TEXT messages about upcoming promotions and
            events
          </span>
        </div>
        <br></br>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
