import asyncHandler from "express-async-handler";

const registerAdmin = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Show All Jobs" });
});
const loginAdmin = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Show All Jobs" });
});
const adminProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Show All Jobs" });
});

export { registerAdmin, loginAdmin, adminProfile };
