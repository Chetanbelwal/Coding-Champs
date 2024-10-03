const express = require("express")
const adminController = require("../controller/admin-controller")
const authMiddleware = require("../middleware/auth-middleware")
const router = express.Router()

router.route("/users").get(authMiddleware, adminController.getAllUsers)
router.route("/contacts").get(authMiddleware, adminController.getAllContacts)

module.exports = router;