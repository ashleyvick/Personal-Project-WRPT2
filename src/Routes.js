import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Events from "./Components/Events/Events";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Reservations from "./Components/Reservations/Reservations";
import UserAccount from "./Components/UserAccount/UserAccount";

const routes = (
  <Switch>
    <Route path="/about" component={About}></Route>
    <Route path="/contact" component={Contact}></Route>
    <Route path="/events" component={Events}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/reservations" component={Reservations}></Route>
    <Route path="/register" component={Register}></Route>
    <Route path="/profile_settings/:id" component={UserAccount}></Route>
    <Route exact path="/" component={Home}></Route>
  </Switch>
);

export default routes;
