const express = require("express");
const router = express.Router();

// to simplify router code we create controllers where all the logic will be handled by controller and routers will be defined on router

const authcontrollers = require("../controller/auth-controller.js"); // Assuming auth-controller.js exports functions
const validate = require("../middleware/validate-middleware.js");
const signUpSchema = require("../validator/auth-validator.js");
const authMiddleware = require("../middleware/auth-middleware.js")


// Route Definitions
router.route("/").get(authcontrollers.home);

router
  .route("/registration")
  .post(validate(signUpSchema), authcontrollers.registration);

router.route("/login").post(authcontrollers.login);

router.route("/user").post(authMiddleware, authcontrollers.user);

// Export router (optional)
module.exports = router;
