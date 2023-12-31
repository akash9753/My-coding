import express from "express";
import { signup, signin, googleAuth } from "../controllers/auth.js";

const router = express.Router();

//Create A user
router.post("/signup", signup)

//SIGN IN
router.post("/signin", signin)

//Google auth
router.post("/google", googleAuth)


export default router;