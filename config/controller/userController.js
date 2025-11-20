const Student = require("../models/students.js");

//fetching all students
const getAll = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

//adding new students
const addUser = async (req, res) => {
  try {
    const { name, course, age, city } = req.body;
    if (!name || !course) {
      return res.status(400).json({ error: "Name and Course are required" });
    }
    const newStudent = new Student({ name, course, age, city });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

//updating student data
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedStudent = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }
    return res.status(200).json(updatedStudent);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

//deleting students
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.status(200).json({ message: "Student deleted sucessfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getAll, addUser, updateUser, deleteUser };
