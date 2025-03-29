import express from "express";
import Station from "../models/Station.js";

const router = express.Router();

// Get all stations
router.get("/", async (req, res) => {
  try {
    const stations = await Station.find();
    res.json(stations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stations" });
  }
});

export default router;