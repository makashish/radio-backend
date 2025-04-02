import express from "express";
import Station from "../models/stationModel.js";

const router = express.Router();

// Fetch All Stations
router.get("/", async (req, res) => {
  try {
    const stations = await Station.find();
    res.json(stations);
  } catch (error) {
    res.status(500).json({ error: "Error fetching stations" });
  }
});

// Add a New Station
router.post("/", async (req, res) => {
  const { name, url } = req.body;
  try {
    const newStation = new Station({ name, url });
    await newStation.save();
    res.status(201).json(newStation);
  } catch (error) {
    res.status(500).json({ error: "Error adding station" });
  }
});

export default router;