require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const app = express();
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const { register, login, logout, getUser, editUser } = require("./authCtrl");

app.use(express.json());
app.use(
  session({
    saveUninitialized: true,
    resave: false,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 },
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((dbInstance) => {
    app.set("db", dbInstance);
    console.log("Database Connected");

    app.listen(SERVER_PORT, () =>
      console.log(`Server running on ${SERVER_PORT}`)
    );
  })
  .catch((e) => console.log(e));

//Auth Endpoints
app.post("/auth/register", register);
app.post("/auth/login", login);
app.put("/api/edituser", editUser);
app.get("/api/logout", logout);
app.get("/api/user", getUser);
