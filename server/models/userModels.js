import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["jobseeker", "recruiter"],
      default: "jobseeker", // Set a default role (optional)
    },
    applications: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Application" },
    ], // Optional for jobseekers
  },
  {
    timestamps: true,
  }
);

// Hash the password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
//compare the hash password, bcrypt has a method for password comparison
userSchema.methods.comparePassword = async function (recentPassword) {
  return await bcrypt.compare(recentPassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
