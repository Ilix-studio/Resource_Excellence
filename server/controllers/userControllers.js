import asyncHandler from "express-async-handler";
import User from "../models/User/userModels.js";
import { validationResult } from "express-validator";
import { generateToken } from "../utils/generateToken.js";

//Register User - set a new user
//POST Request - /api/users
//Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, roles } = req.body;
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
    roles,
  });

  if (newUser) {
    generateToken(res, newUser._id);
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      roles: newUser.roles,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//Auth User || login user - set token
//POST Request - /api/users/auth
//Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, roles });
  console.log(user);

  if (user && (await user.comparePassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(418);
    throw new Error("I am a teapot");
  }
});

// Create roles
// POST Request - /api/users/roles
// Public
// const createRoles = asyncHandler(async (req, res) => {
//   const { roles } = req.body;
// });

//Logout User - remove token
//POST Request - /api/users/logout
//Public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: " User Logout " });
});

//Get User profile
//GET Request - /api/users/profile
//Private
// const getUserProfile = asyncHandler(async (req, res) => {
//   res.status(200).json({ message: " User Profile" });
// });

//Update User Profile
//PUT Request - /api/users/profile
//Private
// const updateUserProfile = asyncHandler(async (req, res) => {
//   res.status(200).json({ message: "Update User Profile" });
// });

export { registerUser, authUser, logoutUser };
