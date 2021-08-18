require("dotenv").config();
const nodemailer = require("nodemailer");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const phoneNum = process.env.TWILO_NUMBER;
const client = require("twilio")(accountSid, authToken);
console.log(authToken, accountSid);

module.exports = {
  getTextList: async (req, res) => {
    const db = req.app.get("db");
    const list = await db.Subscribed.is_subscribed_text({ phone_number });
    res.status(200).json(list);
  },
  getEmailList: async (req, res) => {
    const db = req.app.get("db");
    const list = await db.Subscribed.is_subscribed_email({ email });
    res.status(200).json(list);
  },
  sendText: (req, res) => {
    const { phoneNumber } = req.body;
    console.log(phoneNumber);
    client.messages
      .create({
        body: "Welcome! You have been subscribed to Cafe` Jardin",
        to: phoneNumber, // Text this number
        from: "+1 561 250 7503", // From a valid Twilio number
      })
      .then((message) => res.status(200).json(message))
      .catch((err) => res.status(500).json(err));
  },
  sendEmail: (req, res) => {
    const { email } = req.body;
    console.log(email);
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: "aeromrell@gmail.com",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      },
    });

    transporter
      .sendMail({
        from: '"Cafe` Jardin" <aeromrell@gmail.com>',
        to: email,
        subject: "You have been subscribed to Cafe' Jardin",
        text: "We look forward to seeing you soon!",
        html: "<b> See you soon! <b/>",
      })
      .then((info) => res.status(200).json(info))
      .catch((err) => res.status(500).json(err));
  },
};
