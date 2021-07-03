require ('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const bcryptjs = require('bcryptjs')
const authCtrl = require('./authCtrl');
const app = express();
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const{register, login, logout} = require("./authCtrl")

app.use(express.json());
app.use(session({
    resave: false, 
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000*60*60*24*365}
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized = false},
}).then((dbInstance) => {
    app.set('db', dbInstance);
    console.log('Database Connected')

    app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`))
}).catch(e => console.log(e))

//Auth Endpoints
app.post("/auth/register", register);
app.post("/auth/login", login);
app.get('/api/logout', logout)
