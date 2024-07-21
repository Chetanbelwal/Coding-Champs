const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern-admin";     //if we want to connect with mongoshshell we can use this
// After Profile name we have pwd and after.net/ we have db name
const URI = process.env.MONGODB_URI;

const connectToDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection Success to DB");
  } catch (error) {
    console.log(error);
    console.error("Connection failed to DB");
    process.exit(0); //smoothly exit the process
  }
};

module.exports = connectToDb;
