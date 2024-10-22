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
    const data = await User.findOne({ _id: id }, { password: 0 });

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

//*********** * Update Single  user Data *  ***************

const updateUserById = async (req, res, next) => {
  try {
    //  Get user data by users model here we get user id from url using req.params.id
    const id = req.params.id;
    // whatever the data we have Put on for updating will be stored in req.body and we can get it
    const updatedUserData = req.body;

    // Use updateOne to update the user document with the given ID
    const updatedData = await User.updateOne(
      { _id: id }, // The condition to find the user by ID
      { $set: updatedUserData } // Set the updated fields from req.body
    );

    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

//*********** * Delete users Data *  ***************

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

//*********** * Delete Contact Data *  ***************

const deleteContactById = async (req, res, next) => {
  try {
    //  deleting contact data by contact model here we get user id from url using req.params.id
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });

    return res.status(200).json({ message: "Contact Record deleted Successfully" });
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

module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  getUserById,
  updateUserById,
  deleteContactById,
};
