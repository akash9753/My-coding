import jwt from "jsonwebtoken";
import { createError } from "./error.js";


 const verifyToken = (req, res, next) => {
  console.log(`-----`,req.cookies.access_token);
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "You are not authenticated"));

  jwt.verify(token, process.env.JWT_Secret, (err, user) => {
    if (err) return next(createError(401, "You are not authenticated"));
    req.user = user;
    console.log(`req.user`, req.user);
    next();
  });
};
export default verifyToken;
