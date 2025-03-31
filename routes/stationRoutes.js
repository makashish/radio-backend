import express from "express";
import Station from "../models/Station.js";

const router = express.Router();

// Fetch all stations
router.get("/", async (req, res) => {
  try {
    const stations = await Station.find({}, { __v: 0 }); // Exclude version key
    res.json(stations);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

export default router;