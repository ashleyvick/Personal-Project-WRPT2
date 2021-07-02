import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <Link to={"/register"} className="links">
          Register
        </Link>
      </div>
    );
  }
}

export default Register;
