const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  message: {type: String, required: true},
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Book", contactSchema);

module.exports = Contact;
