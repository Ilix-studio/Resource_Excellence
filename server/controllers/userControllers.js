import asyncHandler from "express-async-handler";

//Auth User - set token
//POST Request - /api/users/auth
//Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

//Register User - set a new user
//POST Request - /api/users
//Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register User" });
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
