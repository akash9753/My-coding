import express from "express";
import { signup } from "../controllers/auth.js";

const router = express.Router();

//Create A user
router.post("/signup", signup)

//SIGN IN
router.post("/signin",)

//Google auth
router.post("/google",)


export default router;