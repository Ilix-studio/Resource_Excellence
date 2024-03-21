import express from "express";
import {
  getAllJobPosts,
  createJobPost,
  updateJobPosts,
  deleteJobPosts,
  applyJob,
} from "../controllers/jobPostsControllers.js";

//Import Job Models

const router = express.Router();

router.get("/", getAllJobPosts);
router.post("/createJob", createJobPost);
router.put("/updateJobPost", updateJobPosts);
router.delete("/delete", deleteJobPosts);
router.post("/apply", applyJob);

export default router;
