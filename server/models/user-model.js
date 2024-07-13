const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Creating mongoose scema

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// jSON Web token    (The schema have .methods method inside that you can define any method and can use in your code like we are using in auth controller  )

userSchema.methods.generateToken = async function () {
  try {
    // It consist of three thing jwt.sign(payload, secretKey, options);
    // Payload told us userdata to be passed in token which encrypt using the secret key provided by us and option consist of expiresIn object that is optional but we can enter

    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error("JWT ki error", error);
  }
};

// Definition of comparePassword
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//encrypting our password using bcryptjs before creating data into database using (save) parameter also we have use next() operation without next it wont move to the operation that to be performed after saving so we need next everytime we are using pre method

userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    next();
  } // Skip hashing if password is not modified

  try {
    const saltedRound = await bcrypt.genSalt(10); // Generate a salt with a cost factor of 10
    const hashedPassword = await bcrypt.hash(user.password, saltedRound); // Hash the password with the generated salt
    user.password = hashedPassword;
    console.log("Hashed", user);
  } catch (error) {
    next(error);
  }
  next(); //Continue with the save operation
});

// Creating a model--> please note the collection name will be singular and it will be automatically convert into Plural Eg User will become users in database

const User = new mongoose.model("User", userSchema);

module.exports = User;
