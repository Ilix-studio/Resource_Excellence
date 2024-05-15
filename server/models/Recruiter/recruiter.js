import mongoose from "mongoose";

export const recruiterProfile = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  companyWebsite: {
    type: String,
    required: true,
  },
});
