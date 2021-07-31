import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import "./About.scss";

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="About">
        <h1 className="page-title">About Cafe` Jardin</h1>
        <p className="about">
          "Cafe` Jardin or (Cafe Garden)" was a vision and a dream turned into a
          reality, May 2019, by founders - Ashley and Jefferson Vick. Their love
          for all things that grow from the earth could only be matched by their
          love for wonderful food around good company.
          <br></br>
          "We want to share what we're passionate about with every single person
          that comes through our door!"
          <br></br>
          Cafe` Jardin strives to make every dining experience with us, magical
          and memorable. Thank you for making the last 2 years, the best years
          of our lives.
        </p>
        <h2 className="reviews-title">Reviews</h2>
        <div className="reviews">
          <p className="reviews">
            "We had our daugthers' 7th birthday at Cafe` Jardin and they went
            above and beyond to make it the most magical event! From the tree
            stump chairs, the moss placemats, even the tiny fairy footprints on
            the tablecloths - we were all enchanted! My daughter now tells
            everyone about her 'Tea Party with the Fairies!' Thank you, Cafe`
            Jardin!"
          </p>
          <br></br>

          <p className="reviews">
            "It was the perfect place for my fiance' to propose to me! The
            atmosphere was so romantic and the intoxicating natural aromas of
            complimentary plants and flowers send you into a euphoria of
            happiness!"
          </p>
        </div>
      </div>
    );
  }
}

export default About;
