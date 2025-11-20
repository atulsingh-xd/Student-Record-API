const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("./config/db.js");
const userRouter = require("./routes/userRoutes.js");

dotenv.config();
console.log("line 8");
app.use(express.json());
app.use("/", userRouter);

app.listen(5000, () => {
  connectDB();
  console.log(`server is running on port 5000`);
});
