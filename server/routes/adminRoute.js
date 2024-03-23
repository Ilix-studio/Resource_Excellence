import express from "express";
const router = express.Router();
import {
  registerAdmin,
  loginAdmin,
  adminProfile,
} from "../controllers/adminController.js";

router.post("/adminR", registerAdmin);
router.post("/adminL", loginAdmin);
router.post("/adminP", adminProfile);
export default router;
