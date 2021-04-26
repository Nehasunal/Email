const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
// const sgMail = require("@sendgrid/mail");
// sgMail.setApikey('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')

// const smtpTransport = require('nodemailer-smtp-transport');

const sendgridTransport = require('nodemailer-sendgrid-transport');
// var path=require('path');

// const details = require("./details.json");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("The server started on port 3000 !!!!!!");
});

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Welcome <br><br></h1>"
  );
});

app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, info => {
    console.log(`The mail has beed send `);
    res.send(info);
  });
});

async function sendMail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport(
    sendgridTransport({
    //  host: "smtp-relay.sendinblue.com",
    //  port: 587,
    //  secure: false, // true for 465, false for other ports
    // // service:'SendGrid',
    //  auth: {
    //    user: details.email,
    //    pass: details.password
    //  }
    auth:{
      api_key:"SG.5MfNGmeSTTaMxrDtLRY_API_KEY_nWtbrXNwiVIZNo"
    }
  }));
////

  let mailOptions = {
    from: 'abc@gamil.com',//sender email
    to: user.email,//user email
    subject: "Welcome ",
    html: `<h1>Hi ${user.name}</h1><br>
    <h4>Thanks for joining us</h4>`
  };
//
  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}
