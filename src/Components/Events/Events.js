import axios from "axios";
import React, { useState, useEffect } from "react";
import EventImage from "./EventImage.jpg";
import "./Events.scss";

const Events = (props) => {
  useEffect(() => {
    axios.get("/api/events").then((response) => {
      console.log(response);
      setEvent(response.data);
    });
  }, []);

  const [event, setEvent] = useState([]);

  return (
    <div className="events-body">
      <h1>Events</h1>
      {event.map((val) => {
        return (
          <div>
            <br></br>
            <h5>
              Date: {new Date(val.event_date).toLocaleString().split(",")[0]}
            </h5>
            <h5>{val.event_name}</h5>
            <h5>
              Time: {val.event_starttime.substring(0, 5)}p.m. -{" "}
              {val.event_endtime.substring(0, 5)}p.m.
            </h5>
          </div>
        );
      })}

      <img
        className="events-image"
        src={EventImage}
        style={{ height: "500px", width: "300px" }}
      />
    </div>
  );
};

export default Events;
