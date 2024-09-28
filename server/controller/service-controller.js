const Service = require("../models/service-model.js")

const services = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      // Handle the case where no document was found
      return res.status(404).json({ msg: "No service found" });
    }
    res.status(200).json({ msg: "Service found", data: response });
  } catch (error) {
    console.log(`Error from the server: ${error}`);
    res.status(500).json({ msg: "Server error", error });
  }
};

module.exports = services;
