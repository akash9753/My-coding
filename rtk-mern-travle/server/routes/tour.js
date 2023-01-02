import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import {
  createTour,
  getTours,
  getTour,
  getToursByUser,
  deleteTour,
  updateTour,
  getToursBySearch,
  getToursByTag,
  getRelatedTours
  
} from "../controllers/tour.js";



router.get("/search", getToursBySearch);
router.get("/tag/:tag", getToursByTag)
console.log(`/realtedTours`);
router.post("/relatedTours", getRelatedTours)
router.get("/", getTours);
// router.get("/test", getToursTest);
router.get("/:id", getTour);


router.post("/", auth, createTour);
router.delete("/:id",auth, deleteTour);
router.patch("/:id",auth, updateTour);
router.get("/userTours/:id", auth, getToursByUser);


export default router;