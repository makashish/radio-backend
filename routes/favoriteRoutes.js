import express from "express";
import Favorite from "../models/Favorite.js";

const router = express.Router();

// Get user's favorites
router.get("/:userId", async (req, res) => {
  try {
    const favorites = await Favorite.find({ userId: req.params.userId });
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch favorites" });
  }
});

// Add to favorites
router.post("/", async (req, res) => {
  try {
    const { userId, stationName, stationUrl } = req.body;
    const newFavorite = new Favorite({ userId, stationName, stationUrl });
    await newFavorite.save();
    res.json({ message: "Added to favorites" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add favorite" });
  }
});

export default router;