import express from "express";
const router = express.Router();
import {
  registerRecruiter,
  loginRecruiter,
  recruiterProfile,
} from "../controllers/recruiterController.js";

router.post("/recruiterR", registerRecruiter);
router.post("/recruiterL", loginRecruiter);
router.post("/recruiterP", recruiterProfile);
export default router;
