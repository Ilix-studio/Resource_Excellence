import mongoose from "mongoose";
import User from "../User/userModels";

const recruiterProfile = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    validate: {
      validator: function (v) {
        return v !== "" ? /\+\d{1,3}\d{10}/.test(v) : true;
      },
      msg: "Phone number is invalid!",
    },
  },
});

const RecruiterInfo = mongoose.model("RecruiterInfo", recruiterProfile);
export default RecruiterInfo;
