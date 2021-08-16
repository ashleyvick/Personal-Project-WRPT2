import React, { Component, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.scss";
import { updateUsername } from "../../Store/reducer";
import Login1 from "./Login1.jpg";
// import routes from "../../Routes";
// import { HashRouter, Switch } from "react-router-dom";

const Login = (props) => {
  const [authInfo, setAuthInfo] = useState({ username: "", password: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setAuthInfo({
      ...authInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/login", authInfo)
      .then((response) => {
        console.log(response);
        dispatch(updateUsername(authInfo.username));

        props.history.push("/reservations");
      })
      .catch((e) => {
        alert("Username or password is incorrect");
      });
  };

  return (
    <div className="login-body">
      <h1 className="page-title">Login</h1>
      <h2 className="page-header">
        We do not accept walk-ins. <br></br>To make a reservation, please Login
        or create a profile.
      </h2>
      <h2 className="page-header">
        To view or cancel a current reservation, login to your account
      </h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input placeholder="Username" name="username" onChange={handleChange} />
        <input
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <button className="button">Submit</button>

        <Link to={"/register"} className="links">
          Register New User
        </Link>
      </form>
      <div>
        <img
          className="login-image"
          src={Login1}
          style={{ height: "450px", width: "350px" }}
        />
      </div>
      <div className="admin-route">
        <Link to={"/admin"} className="links">
          Admin-Portal
        </Link>
      </div>
    </div>
  );
};

export default Login;
