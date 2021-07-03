import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <Link to={"/register"} className="links">
          Register New User
        </Link>
      </div>
    );
  }
}

export default Login;
