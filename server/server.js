const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
app.use(express.json());

const authRoute = require("./router/auth-router.js");
const contactRoute = require("./router/contact-router.js")
const connectToDb = require("./utils/db.js");
const errorMiddleware = require("./middleware/errorMiddleware.js")

const port = process.env.PORT;

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use(errorMiddleware);

connectToDb().then(() => {
  app.listen(port, () => {
    console.log(`server is running at port ${port}`);
  });
});
