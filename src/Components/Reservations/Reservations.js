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
      if (response.data[0]) {
        console.log(response);
        var date = new Date(response.data[0].reservation_date);
        // const [month, day, year] = [
        //   date.getMonth(),
        //   date.getDate(),
        //   date.getFullYear(),
        // ];

        setDate(date.toLocaleString().split(",")[0]);
        setTime(response.data[0].reservation_time.substring(0, 5));
        setAdults(response.data[0].party_adults);
        setChildren(response.data[0].party_children);
      }
    });
  }, []);

  const [username, setUsername] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");

  // adding calendar widget and make it responsive to date user wants to choose.
  // axios.get available dates and times and display them on correct inputs.
  //axios.put/post reservation made (line 40-50)
  // remove selected reservation from db.

  const handleCancelReservation = (e) => {
    e.preventDefault();
    axios.delete("api/reservation").then((response) => {
      console.log(response);
      alert("Your reservation has been canceled.");
    });
  };
  //once cancelled. How do I put that date/time back on the sql table/db?

  const handleEditProfile = (e) => {
    e.preventDefault();
    props.history.push("/profile_settings/:id");
  };

  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [resAdults, setResAdults] = useState("");
  const [resChildren, setResChildren] = useState("");

  const handleSetDate = (e) => setResDate(e.target.value);
  const handleSetTime = (e) => setResTime(e.target.value);
  const handleSetAdults = (e) => setResAdults(e.target.value);
  const handleSetChildren = (e) => setResChildren(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/reservation", {
        date: resDate,
        time: resTime,
        adults: resAdults,
        children: resChildren,
      })
      .then((response) => {
        console.log(response);
        alert(
          "Your Reservation Has Been Saved. To View or Cancel, Login to Account"
        );
        props.history.push("/");
      });
  };

  return (
    <div>
      <div className="res-body">
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
          <form className="reservation-form" onSubmit={handleSubmit}>
            <h1 className="makeRes">Make a Reservation</h1>
            <br></br>

            <div style={{ display: "grid", width: "100px" }}>
              <label> Date </label>
              <select
                className="res-input"
                title="Date"
                onChange={handleSetDate}
              >
                <option> </option>
                <option>Monday, 09/06/2021 </option>
                <option>Tuesday, 09/07/2021</option>
                <option>Wednesday, 09/08/2021</option>
                <option>Thursday, 09/09/2021</option>
                <option>Friday, 09/10/2021</option>
                <option>Saturday, 09/11/2021</option>
              </select>
            </div>
            <br></br>

            <div style={{ display: "grid", width: "100px" }}>
              <label> Time </label>
              <select
                className="res-input"
                title="Time"
                onChange={handleSetTime}
              >
                <option> </option>
                <option>12:00pm</option>
                <option>12:30pm</option>
                <option>1:00pm</option>
                <option>1:30pm</option>
                <option>2:00pm</option>
                <option>2:30pm</option>
                <option>3:00pm</option>
                <option>3:30pm</option>
                <option>4:00pm</option>
                <option>4:30pm</option>
                <option>5:00pm</option>
                <option>5:30pm</option>
                <option>6:00pm</option>
                <option>6:30pm</option>
                <option>7:00pm</option>
                <option>7:30pm</option>
                <option>8:00pm</option>
                <option>8:30pm</option>
              </select>
            </div>
            <br></br>
            <h1 className="large-parties">
              For large parties (10 or more people) or other event reservations,
              <br></br>
              please call/email us so we can help make the event perfect for
              you.
            </h1>
            <br></br>
            <div style={{ display: "grid", width: "100px" }}>
              <label> Party - Adults </label>
              <select
                className="res-input"
                title="Adults"
                placeholder="Adults"
                onChange={handleSetAdults}
              >
                <option> </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
              </select>
              <br></br>
              <label> Party - Children </label>
              <select
                className="res-input"
                title="Children"
                placeholder="Children"
                onChange={handleSetChildren}
              >
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
              </select>
            </div>
            <br></br>

            <button className="button">Save Reservation</button>
          </form>

          <div className="quote-image">
            <h2 className="page-quote">
              “A garden is a delight to the eye and a solace for the soul.” ―
              Saadi
            </h2>
            <img
              className="res-image"
              src={Reservations1}
              style={{ height: "500px", width: "400px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
