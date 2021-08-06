import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import contact from "./Contact.scss";

class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="contact-body">
          <h1 className="page-title">Contact</h1>
          <h2>
            For large parties or other event reservations, please call/email us
            so we can help make the event perfect for you.
          </h2>
          <h3>
            Phone Number: 801-555-2424 <br></br> Email Address:
            events@cafejardin.com
          </h3>
        </div>
      </div>
    );
  }
}

export default Contact;
