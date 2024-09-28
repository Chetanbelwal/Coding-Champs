const express = require("express");
const router = express.Router();
const services = require("../controller/service-controller.js")

router.route("/service").get(services);

// Ye router export krna necessary ha iske bad hum isko main server.js ma call krke use kr skte ha jha hum apna route define krenge main route that will call this route

module.exports = router;
