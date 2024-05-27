import express from "express";
import {
  getAllJobPosts,
  createJobPost,
  updateJobPosts,
  deleteJobPosts,
  applyJob,
} from "../controllers/jobPostsControllers.js";
import protect from "../middleware/authMiddleware.js";

//Import Job Models

const router = express.Router();

router.use(protect);

router.get("/getAll", getAllJobPosts);
router.post("/createJob", createJobPost);
router.put("/updateJobPost", updateJobPosts);
router.delete("/delete", deleteJobPosts);
router.post("/apply", applyJob);

export default router;
