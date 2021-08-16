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
  sendEmail: async (req, res) => {
    const { email } = req.body;
    console.log(email);
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: process.env.SERVER_PORT,
      secure: false,
      auth: {
        user: process.env.SERVER_EMAIL,
        pass: process.env.SERVER_PASSWORD,
      },
    });

    let info = await transporter.sendMail({
      from: '"Cafe` Jardin" <aeromrell@gmail.com>',
      to: email,
      subject: "You have been subscribed to Cafe' Jardin",
      text: "We look forward to seeing you soon!",
      html: "<b> See you soon! <b/>",
    });
    console.log("Message sent: %s", info.messageId);
    console
      .log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
      .then((info) => res.status(200).json(info))
      .catch((err) => res.status(500).json(err));
  },
};
