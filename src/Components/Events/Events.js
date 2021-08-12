import axios from "axios";
import React, { useState, useEffect } from "react";
import EventImage from "./EventImage.jpg";
import "./Events.scss";

const Events = (props) => {
  useEffect(() => {
    axios.get("/api/events").then((response) => {
      console.log(response);
      var date = new Date(response.data[0].event_date);
      setEventName(response.data[0].event_name);
      setEventDate(date.toLocaleString().split(",")[0]);
      setEventStartTime(response.data[0].event_startTime);
      setEventEndTime(response.data[0].event_endTime);
    });
  }, []);

  //How do I get all of them to display? Not just index[0]

  const [event_name, setEventName] = useState("");
  const [event_date, setEventDate] = useState("");
  const [event_startTime, setEventStartTime] = useState("");
  const [event_endTime, setEventEndTime] = useState("");

  return (
    <div className="events-body">
      <h1>Events</h1>
      <br></br>
      <div>
        <h5 value={event_name}>{event_name}</h5>
        <h5 value={event_date}>Date: {event_date}</h5>

        {/* Event time won't display */}
        <h5 value={(event_startTime, event_endTime)}>
          Time: {event_startTime} - {event_endTime}
        </h5>
      </div>
      <br></br>
      <div>
        <img
          className="events-image"
          src={EventImage}
          style={{ height: "500px", width: "300px" }}
        />
      </div>
    </div>
  );
};

export default Events;
