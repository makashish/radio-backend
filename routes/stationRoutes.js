import express from "express";
import Station from "../models/Station.js";

const router = express.Router();

// Fetch all stations
router.get("/", async (req, res) => {
  try {
    const stations = await Station.find({}, { _id: 0, name: 1, url: 1}); // Exclude version key
    res.json(stations);
  } catch (error) {
    console.error("Error fetching stations:", error);
    res.status(500).json({error:"Internal Server Error" });
  }
});

export default router;