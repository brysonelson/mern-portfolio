const db = require("../models");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

// Defining methods for the booksController
module.exports = {
  create: function(req, res) {
    db.Contact
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

      // console.log(req.body)

      let contact = req.body

      sendEmail(contact);
    
      //this is the function to send mail with SendGrid
      function sendEmail(contact) {
        console.log("email function hit")
        //set our API key
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        console.log("sending email");
        //create our message content
        var msg = {
          to: "bryson.nelson1@gmail.com",
          from: "bryson.nelson1@gmail.com",
          subject: "New Portfolio Contact",
          text:
            "A new contact has submitted their information on your Portfolio \n\n" +
            "\n\n" +
            "Contact Information:\n\n" +
            "Name: " + contact.first_name + " " + contact.last_name + "\n\n" +
            "Email: " + contact.email + "\n\n" +
            "Message: " + contact.message
        };
        //send the email with the above message
        sgMail.send(msg, function(err) {
          if (err) {
            return console.log(err);
          }
    
          // done(err, "done");
          console.log("sent mail");
        });
      }
    }
  }
