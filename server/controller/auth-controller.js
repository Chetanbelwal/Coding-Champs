const express = require("express");
const User = require("../models/user-model.js");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.send("Hello Friends how are you inside router.js");
  } catch (error) {
    console.log(error);
  }
};

// Registration logic

//1 Get Registration Data: retreive userdata( username, email and password)

//2 check email existence
//3 hash password
//4 Create User
//5 Save it to database
//6 Respond with registration successful

const registration = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ message: "Email is already used" });
    }
    // const saltedRound = 10
    // const hashedPassword = await bcrypt.hash(password, saltedRound);
    //we can also use pre method in place where we have created mongooseSchema directly to bcrypt our password

    const userData = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).json({
      msg: userData,
      token: await userData.generateToken(),
      userId: userData._id.toString(),
    });
  } catch (error) {
    res.status(500).json("Error Error Error");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email: email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // const isPasswordCorrect = await bcrypt.compare(password,userExist.password)

    // This above Line can be written as this one as below and definition of comparePassword will be at user-model where we can grab password from dabtabase using this.password
    const isPasswordCorrect = await userExist.comparePassword(password);

    if (isPasswordCorrect) {
      res.status(200).json({
        msg: "Logged In Successfully",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ msg: "Invalid email or password" });
    }
  } catch (error) {
    // res.status(500).json("Error Error Error");
    next(error);
  }
};

//---------------------------------
// User logic To send user data
//---------------------------------

const user = async (req, res) => {
  try {
    // const userData = await User.find({});
    const userData = req.user;
    // console.log("This is the userdata", userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(` error from user route ${error}`);
  }
};

module.exports = { home, registration, login, user };
