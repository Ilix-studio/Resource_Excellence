import express from "express";
const router = express.Router();
import { check } from "express-validator";
//Import User Models
import {
  authUser,
  registerUser,
  logoutUser,
} from "../controllers/userControllers.js";
// import { protect } from "../middleware/authMiddleware.js";

//Router-level Middleware
//User Routes and Controller Functions
router.post(
  "/register",
  [
    check("name").notEmpty().withMessage("Name is required"),
    check("email").isEmail().withMessage("Please enter a valid email"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  registerUser
);
router.post("/auth", authUser); // login user

router.post("/logout", logoutUser);

// router
//   .route("/profile")
//   .get(protect, getUserProfile)
//   .put(protect, updateUserProfile);

export default router;
