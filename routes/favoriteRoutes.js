import express from "express";
import Favorite from "../models/favoriteModels";

const router = express.Router();

// Fetch user favorites
router.get("/:userId", async (req, res) => {
  try {
    const favorites = await Favorite.find({ userId: req.params.userId });
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: "Error fetching favorites" });
  }
});

// Add to favorites
router.post("/", async (req, res) => {
  try {
    const { userId, stationName, stationUrl } = req.body;
    const newFavorite = new Favorite({ userId, stationName, stationUrl });
    await newFavorite.save();
    res.json({ message: "Added to favorites!" });
  } catch (error) {
    res.status(500).json({ error: "Error adding to favorites" });
  }
});

export default router;