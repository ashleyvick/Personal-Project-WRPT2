import React, { Component } from "react";
import "./Events.scss";

/// write this component with css in js

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
