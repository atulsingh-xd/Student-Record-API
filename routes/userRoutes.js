const Student = require("../models/students.js");
const express = require("express");
const userRouter = express.Router();
const {
  getAll,
  addUser,
  updateUser,
  deleteUser,
} = require("../controller/userController.js");

userRouter.route("/students").get(getAll).post(addUser);

userRouter.route("/students/:id").delete(deleteUser).put(updateUser);

module.exports = userRouter;
