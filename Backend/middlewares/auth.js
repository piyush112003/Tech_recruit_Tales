import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { User } from "../models/userSchema.js";
import ErrorHandler from "../middlewares/error.js";
import jwt from "jsonwebtoken";

//AUTHENTICATION
export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;  // jwt token me secodn field token diya hai isliye token
  if (!token) {
    return next(new ErrorHandler("User is not authenticated!", 400));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  req.user = await User.findById(decoded.id);

  next();
});

//AUTHORIZATION
export const isAuthorized = (...roles) => {   //multiple roles hao is liye ...roles  i.e Reader,Author
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {   // agar jo role bheja hai wo given roles me nhi hai
      return next(
        new ErrorHandler(
          `User with this role(${req.user.role}) not allowed to access this resource`
        )
      );
    }
    next();
  };
};
