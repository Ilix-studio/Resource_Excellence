// Get Recruiter || Jobseeker Profiles

import express from "express";
import findUser from "../controllers/userProfile";
const router = express.Router();

router.get("/profile", findUser);

export default router;
