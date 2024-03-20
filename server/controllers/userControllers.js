import asyncHandler from "express-async-handler";

//Auth User - set token
//POST Request - /api/users/auth
//Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

export { authUser };
