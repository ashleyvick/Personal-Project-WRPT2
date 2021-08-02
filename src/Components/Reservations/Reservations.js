import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import Reservations1 from "./Reservations1.jpg";
import "./Reservations.scss";

const Reservations = (props) => {
  useEffect(() => {
    axios.get("/api/user").then((response) => {
      console.log(response);
      setUsername(response.data.username);
      if (response.data === "") {
        props.history.push("/login");
      }
    });
    axios.get("/api/reservation").then((response) => {
      console.log(response);
      var date = new Date(response.data[0].reservation_date);
      const [month, day, year] = [
        date.getMonth(),
        date.getDate(),
        date.getFullYear(),
      ];

      setDate(month + "/" + day + "/" + year);
      setTime(response.data[0].reservation_time.substring(0, 5));
      setAdults(response.data[0].party_adults);
      setChildren(response.data[0].party_children);
    });
  }, []);

  const [username, setUsername] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("/api/reservation", { date, time, adults, children })
  //     .then((response) => {
  //       console.log(response);
  //       alert(
  //         "Your Reservation Has Been Saved. To View or Cancel, Login to Account"
  //       );
  //     });
  // };

  const handleCancelReservation = (e) => {
    e.preventDefault();
    axios.delete("api/reservation").then((response) => {
      console.log(response);
      alert("Your reservation has been canceled.");
    });
  };

  const handleEditProfile = (e) => {
    e.preventDefault();
    props.history.push("/profile_settings/:id");
  };

  return (
    <div>
      <div className="body">
        <div className="top-box">
          <h1 className="page-title">Reservations</h1>
          <header className="user-info">
            <h3 value={username}>Welcome Back, {username} </h3>
            <button className="user-button" onClick={handleEditProfile}>
              Edit Profile
            </button>
            <br></br>
            <br></br>

            <div>
              <h4>**Current Reservations** </h4>
              <h5 value={date}>Date: {date}</h5>
              <h5 value={time}>Time: {time}</h5>
              <h5 value={adults}>Adults: {adults}</h5>
              <h5 value={children}>Children: {children}</h5>
            </div>

            <br></br>
            <button className="user-button" onClick={handleCancelReservation}>
              Cancel Reservation
            </button>
          </header>
        </div>

        <div className="bottom-box">
          <form className="reservation-form">
            <h1 className="makeRes">Make a Reservation</h1>
            <br></br>

            <div style={{ display: "grid", width: "100px" }}>
              <label> Date </label>
              <select title="Date"></select>
            </div>
            <br></br>

            <div style={{ display: "grid", width: "100px" }}>
              <label> Time </label>
              <select title="Time"></select>
            </div>
            <br></br>

            <div style={{ display: "grid", width: "100px" }}>
              <label> Party </label>
              <select title="Adults" placeholder="Adults" />
              <br></br>
              <select title="Children" placeholder="Children" />
            </div>
            <br></br>

            <button className="button">Save Reservation</button>
          </form>

          <div className="quote/image">
            <h2 className="page-quote">
              “A garden is a delight to the eye and a solace for the soul.” ―
              Saadi
            </h2>
            <img
              className="res-image"
              src={Reservations1}
              style={{ height: "400px", width: "350px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
