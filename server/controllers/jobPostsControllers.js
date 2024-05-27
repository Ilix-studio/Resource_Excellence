import asyncHandler from "express-async-handler";

//Get all Job Posts
//GET Request - /api/jobs/getAll"
//Private
//accessible for users and admin
const getAllJobPosts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Show All Jobs" });
});

//Create Job Posts
//POST Request - /api/jobs
//Private
//accessible for admin
const createJobPost = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Create Job" });
});

//Update Job Posts
//PUT Request - /api/jobs
//Private
//accessible for admin
const updateJobPosts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User" });
});

//Delete Job Posts
//PUT Request - /api/jobs
//Private
//accessible for admin
const deleteJobPosts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Delete User" });
});

//Apply Job
//POST Request - /api/jobs/:jobId/apply
//Private
//accessible for users
const applyJob = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Apply Job " });
});

export {
  createJobPost,
  getAllJobPosts,
  updateJobPosts,
  deleteJobPosts,
  applyJob,
};
