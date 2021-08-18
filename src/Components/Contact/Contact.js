import React, { Component } from "react";
import "./Contact.scss";
import contactImg1 from "./contactImg1.jpg";

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
          <br></br>
          <div>
            <img
              style={{ height: "450px", width: "350px" }}
              src={contactImg1}
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
