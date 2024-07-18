import express from "express";
import {
  getAllAuthors,
  getMyProfile,
  login,
  logout,
  register,
} from "../controllers/userController.js";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/myprofile", isAuthenticated, getMyProfile);  // kkoi bhi profile access kr skta tha isliye authenticationa laga diya
router.get("/authors", getAllAuthors);

export default router;
