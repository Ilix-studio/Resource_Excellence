import asyncHandler from "express-async-handler";
import User from "../models/userModels.js";
import { validationResult } from "express-validator";
import { generateToken } from "../utils/generateToken.js";

//Register User - set a new user
//POST Request - /api/users
//Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // Input validation using Express Validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }
  // Check for existing email
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).json({ message: "Email already exists" });
  }
  // Create a new user with hashed password
  const newUser = await User.create({
    name,
    email,
    password,
  });

  if (newUser) {
    generateToken(res, newUser._id);
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//Auth User - set token
//POST Request - /api/users/auth
//Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

//Logout User - remove token
//POST Request - /api/users/logout
//Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" });
});

//Get User profile
//GET Request - /api/users/profile
//Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: " User Profile" });
});

//Update User Profile
//PUT Request - /api/users/profile
//Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User Profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
