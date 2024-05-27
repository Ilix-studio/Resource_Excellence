import mongoose from "mongoose";
// Job Applied form

const applicationSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  recruiterId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  applicantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },
  resume: {
    type: String,
    optional,
  },
  status: {
    type: String,
    enum: ["pending", "rejected", "approved", "applied", "accepted"],
    default: "applied",
  },
  createdAt: { type: Date, default: Date.now }, // Application submission time
});

const application = mongoose.model("Application", applicationSchema);
export default application;
