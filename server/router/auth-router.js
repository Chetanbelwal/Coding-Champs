const express = require("express");
const router = express.Router();
const authcontrollers = require("../controller/auth-controller.js"); // Assuming auth-controller.js exports functions
const validate = require("../middleware/validate-middleware.js");
const signUpSchema = require("../validator/auth-validator.js");
// Route Definitions
router.route("/").get(authcontrollers.home);

router
  .route("/registration")
  .post(validate(signUpSchema), authcontrollers.registration);

router.route("/login").post(authcontrollers.login);

// Export router (optional)
module.exports = router;
