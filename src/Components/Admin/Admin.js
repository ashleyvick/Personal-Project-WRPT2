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

  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [starting, setStartTime] = useState("");
  const [ending, setEndTime] = useState("");

  const handleSetName = (e) => setEventName(e.target.value);
  const handleSetDate = (e) => setEventDate(e.target.value);
  const handleSetStartTime = (e) => setStartTime(e.target.value);
  const handleSetEndTime = (e) => setEndTime(e.target.value);

  const handleEventSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/events", {
        event_name: eventName,
        event_date: eventDate,
        event_startTime: starting,
        event_endTime: ending,
      })
      .then((response) => {
        console.log(response);
        alert("Event has been added.");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        props.history.push("/events");
      })
      .catch((response) => {
        console.log(response);
        alert("Email message did not send. Try again.");
      });
  };

  return (
    <div className="admin-body">
      <div className="messaging-div">
        {" "}
        <h1>Messaging Center</h1>
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

      <div className="event-div">
        <h1>Event Center</h1>
        <br></br>
        <form onSubmit={handleEventSubmit}>
          <p>
            <h2>Event Name</h2>
            <textarea
              style={{ display: "grid", width: "500px" }}
              name="message"
              rows="3"
              onChange={handleSetName}
            ></textarea>
            {/* will need handleSetEventName */}
          </p>
          <br></br>
          <p>
            <label> Event Date </label>
            <input
              style={{ display: "grid", width: "200px" }}
              onChange={handleSetDate}
            />
          </p>
          <br></br>
          <p>
            <label> Start Time </label>
            <input
              style={{ display: "grid", width: "200px" }}
              onChange={handleSetStartTime}
            />
          </p>
          <br></br>
          <p>
            <label> End Time </label>
            <input
              style={{ display: "grid", width: "200px" }}
              onChange={handleSetEndTime}
            />
          </p>
          <br></br>
          <button>Save Event</button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
