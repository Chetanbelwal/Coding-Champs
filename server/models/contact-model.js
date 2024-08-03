const mongoose = require("mongoose");

// create schema
const contactSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  });

// create model from that schema
  const Contact = new mongoose.model("Contact", contactSchema);

module.exports = Contact;
