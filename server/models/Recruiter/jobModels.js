import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    optional: true,
  },
  // applications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Application" }], // Array of Application ObjectIds
});

const Job = mongoose.model("Job", jobSchema);
export default Job;
