import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
  userId: { type: String, required: true },  // User who added the favorite
  stationId: { type: mongoose.Schema.Types.ObjectId, ref: "Station", required: true }, // Reference to Station
  addedAt: { type: Date, default: Date.now }, // Timestamp of when added
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

export default Favorite;