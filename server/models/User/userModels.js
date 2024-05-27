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
    roles: {
      type: String,
      required: true,
      enum: ["jobseeker", "recruiter"],
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
//middleware function that executes before saving a user document.
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
//compare the hash password, bcrypt has a method for password comparison
// userSchema.methods.comparePassword = async function (recentPassword) {
//   return await bcrypt.compare(recentPassword, this.password);
// };
// If I add confirm password functionality reveal the code

const User = mongoose.model("User", userSchema);
export default User;
// Add Google OAuth
