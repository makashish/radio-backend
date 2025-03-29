import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
  userId: String, // Firebase UID
  stationName: String,
  stationUrl: String,
});

export default mongoose.model("Favorite", favoriteSchema);