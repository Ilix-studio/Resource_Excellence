import mongoose from "mongoose";

const jobseekerProfile = mongoose.Schema({
  userId: {
    types: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },

  skills: {
    type: [String],
    required: true,
  },
  bio: {
    type: String,
  },
  githubusername: {
    type: String,
  },
});
const JobseekerInfo = mongoose.model("JobseekerInfo", jobseekerProfile);
export default JobseekerInfo;
