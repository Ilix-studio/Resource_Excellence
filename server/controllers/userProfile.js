import RecruiterInfo from "../models/Recruiter/recruiterProfile";
import JobseekerInfo from "../models/JobSeeker/jobseekerProfile";
import User from "../models/User/userModels";
import asyncHandler from "express-async-handler";
import { message } from "statuses";

// get user's personal details

const findUser = asyncHandler(async (req, res) => {
  const user = req.user;
  if (user.roles === "recruiter") {
    RecruiterInfo.findOne({ userId: user._id })
      .then((recruiter) => {
        if (recruiter == null) {
          res.status(404).json({
            message: "No Recruiter Profile",
          });
          return;
        }
        res.json(recruiter);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } else {
    JobseekerInfo.findOne({ userId: user._id })
      .then((jobseeker) => {
        if (jobseeker == null) {
          res.status(404).json({
            message: "No Jobseeker Profile",
          });
          return;
        }
        res.json(jobseeker);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  }
});

export default findUser;
