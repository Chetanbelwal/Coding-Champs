const adminMiddleware = (req, res, next) => {
  try {
    const adminRole = req.user.isAdmin;

    if (!adminRole) {
      return res
        .status(401)
        .json({ message: "Access Denied. You are not an Admin" });
    }

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    next(error);
  }
};

module.exports = adminMiddleware;
