const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors")
const express = require("express");
const app = express();

// handling corsOptions
const corsOptions = {
  origin: 'http://localhost:5173',
  methodS: "POST, PUT, PATCH, DELETE, HEAD"
}
app.use(cors(corsOptions))


app.use(express.json());

const authRoute = require("./router/auth-router.js");
const contactRoute = require("./router/contact-router.js")
const serviceRoute = require("./router/service-router.js")
const connectToDb = require("./utils/db.js");
const errorMiddleware = require("./middleware/errorMiddleware.js")

const port = process.env.PORT;

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

app.use(errorMiddleware);

connectToDb().then(() => {
  app.listen(port, () => {
    console.log(`server is running at port ${port}`);
  });
});
