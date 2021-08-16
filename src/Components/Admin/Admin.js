import "./Admin.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin = (props) => {
  useEffect(() => {
    axios.get("/api/messaging").then((response) => {
      console.log(response);
      //   phoneNumber = response.data.is_subscribed_email;
      //   email = response.data.is_subscribed_text;
    });
  }, []);

  const handleTextSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/messaging")
      .then((response) => {
        console.log(response);
        alert("Text message sent successfully");
      })
      .catch((response) => {
        console.log(response);
        alert("Text message did not send. Try again.");
      });
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/messaging")
      .then((response) => {
        console.log(response);
        alert("Email message sent successfully");
      })
      .catch((response) => {
        console.log(response);
        alert("Email message did not send. Try again.");
      });
  };

  return (
    <div className="admin-body">
      <div>
        {" "}
        <h1>Messaging Center</h1>
      </div>
      <br></br>
      <br></br>
      <div className="message">
        <form onSubmit={handleTextSubmit}>
          <p>
            <h2>Text Message</h2>
            <textarea
              style={{ display: "grid", width: "500px" }}
              name="message"
              rows="5"
            ></textarea>
          </p>
          <button>Send Text Message</button>
        </form>
      </div>
      <br></br>

      <div>
        <form onSubmit={handleEmailSubmit}>
          <p>
            <h2>Email Message</h2>
            <textarea
              style={{ display: "grid", width: "500px" }}
              name="message"
              rows="10"
            ></textarea>
          </p>
          <button>Send Email</button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
