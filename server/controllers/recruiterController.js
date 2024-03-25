import asyncHandler from "express-async-handler";

const registerRecruiter = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Show All Jobs" });
});
const loginRecruiter = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Show All Jobs" });
});
const recruiterProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Show All Jobs" });
});

export { registerRecruiter, loginRecruiter, recruiterProfile };
