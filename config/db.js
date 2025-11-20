const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

function connectDB(params) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("MongoDB Connection Error:", err));
}

//exporting
module.exports = connectDB;
