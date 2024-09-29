const { z } = require("zod");

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .email({ message: "Email is invalid" })
    .min(3, { message: "Email must be at least 3 characters" })
    .max(255, { message: "Email must be not more than 255 character" }),


    password: z
    .string({ required_error: "Password is Required" })
    .trim()
    .min(8, { message: "Password must be at least 8 character Long" })
    .max(244, { message: "Password must be not more than 244 characters" }),

});

const signUpSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name is Required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(255, { message: "Name must be not more than 255 character" }),

  phone: z
    .string({ required_error: "Phone Number is Required" })
    .trim()
    .min(10, { message: "Phone Number must be at least 10 Digits" })
    .max(20, { message: "Phone Number must be not more than 20 Digits" }),

});

module.exports = {signUpSchema, loginSchema}