const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

// A middleware that will verify the token whether use is genuine or not and in response it have userdata expect password which is passed as req.user


const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    // If you attempt to use an expired token, you'll receive a "401 Unauthorized HTTP" response.
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP, Token not provided" });
  }

  // Assuming token is in the format "Bearer <jwtToken>, Removing the "Bearer" prefix"
  const jwtToken = token.replace("Bearer", "").trim();
  // console.log(jwtToken);

  try {
    // Verifying the token it will give us all the data we pass as payload using jwt.sign
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    // console.log(isVerified);

    // getting the complete user details & also we don't want password to be sent
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });

    // In Express.js, req (request) object is an object that contains information
    // about the HTTP request. By adding custom properties to req, you can
    // pass information between middleware functions or make it available
    // in your route handlers. same we are doing below now our route can directly use req.user, req.token etc


    req.token = token;
    req.user = userData;
    req.userID = User._id;

    // Move on to the next middleware or route handler
    next();
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: "Unauthorized. Invalid token." });
  }
};

module.exports = authMiddleware;