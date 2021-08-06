import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import events from "./Events.scss";

class Events extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="events-body">
          <h1 className="page-title">Events</h1>
        </div>
      </div>
    );
  }
}

export default Events;
