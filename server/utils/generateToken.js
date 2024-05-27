import jwt from "jsonwebtoken";

//Generate JWT token
export const generateToken = (res, userId, roles) => {
  const token = jwt.sign({ userId, roles }, process.env.JWT_SECRET, {
    expiresIn: "10s",
  });
  const refresh = jwt.sign(
    { userId, roles },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "2000",
    }
  );
  // Set HTTP-only cookie with JWT token (secure flag for HTTPS only)
  res.cookie("jwt", token, refresh, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
  res.json({ token });
};
