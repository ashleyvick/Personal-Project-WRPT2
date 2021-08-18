import React, { Component } from "react";
import routes from "./Routes";
import { Link } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <section className="navbar">
          <nav className="nav-title">
            <Link to={"/"} className="title-link">
              Cafe Jardin
            </Link>

            <nav className="nav-links">
              <Link to={"/reservations"} className="links">
                Reservations
              </Link>
              <Link to={"/events"} className="links">
                Events
              </Link>
              <Link to={"/about"} className="links">
                About
              </Link>
              <Link to={"/contact"} className="links">
                Contact
              </Link>
              <Link to={"/login"} className="links">
                Login
              </Link>
            </nav>
          </nav>
        </section>

        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
