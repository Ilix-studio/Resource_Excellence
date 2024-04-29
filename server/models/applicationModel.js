import mongoose from "mongoose";
//Here Jobseeker will see all the job post if appliped

const applicationSchema = mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },
  applicantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  resume: {
    type: String,
    optional,
  },
  status: {
    type: String,
    enum: ["pending", "rejected", "approved"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now }, // Application submission time
});

const application = mongoose.model("Application", applicationSchema);
export default application;
