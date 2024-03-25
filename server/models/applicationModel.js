import mongoose from "mongoose";

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

const Application = mongoose.model("Application", applicationSchema);
export default Application;
