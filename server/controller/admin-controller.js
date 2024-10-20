const User = require("../models/user-model");
const Contact = require("../models/contact-model");

//*********** * Get All users Data *  ***************

const getAllUsers = async (req, res, next) => {
  try {
    //  getting user data from users model but we dont need password
    const users = await User.find({}, { password: 0 });

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No user data available" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

//*********** * Get Single  user Data *  ***************

const getUserById = async (req, res, next) => {
    try {
      //  Get user data by users model here we get user id from url using req.params.id
      const id = req.params.id;
      const data = await User.find({ _id: id }, { password: 0 });
  
      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };


//*********** * Delete All users Data *  ***************

const deleteUserById = async (req, res, next) => {
  try {
    //  deleting user data by users model here we get user id from url using req.params.id
    const id = req.params.id;
    await User.deleteOne({ _id: id });

    return res.status(200).json({ message: "User Recor deleted Successfully" });
  } catch (error) {
    next(error);
  }
};



//*********** */ Get All Contact Data /*  ***************
const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No Contact Data Available" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllUsers, getAllContacts, deleteUserById, getUserById };
