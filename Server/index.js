require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const app = express();
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const { register, login, logout, getUser, editUser } = require("./authCtrl");
const {
  makeReservation,
  cancelReservation,
  getReservations,
} = require("./reservationCtrl");
const {
  viewEvents,
  addEvent,
  updateEvent,
  deleteEvent,
} = require("./eventsCtrl");

const {
  getTextList,
  getEmailList,
  sendText,
  sendEmail,
} = require("./messagingCtrl");

app.use(express.json());
app.use(
  session({
    saveUninitialized: true,
    resave: false,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 },
  })
);

app.use(express.static(`${__dirname}/../build`));

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((dbInstance) => {
    app.set("db", dbInstance);
    console.log("Database Connected");
    const port = process.env.PORT || SERVER_PORT || 5000;
    app.listen(port, () => console.log(`Server running on` + port));
  })
  .catch((e) => console.log(e));

//Auth Endpoints
app.post("/auth/register", register);
app.post("/auth/login", login);
app.put("/api/edituser", editUser);
app.get("/api/logout", logout);
app.get("/api/user", getUser);

//Reservation Endpoints
app.get("/api/reservation", getReservations);
app.post("/api/reservation", makeReservation);
app.delete("/api/reservation", cancelReservation);

//Events Endpoints;
app.get("/api/events", viewEvents);
app.post("/api/events", addEvent);
app.delete("/api/events", deleteEvent);
app.put("/api/events", updateEvent);

// Messaging Endpoints;
app.post("/api/messaging", sendText);
app.get("/api/messaging", getTextList);
app.get("/api/messaging", getEmailList);
app.post("/api/email", sendEmail);
