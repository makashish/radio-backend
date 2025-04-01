import mongoose from "mongoose";

const FavoriteSchema = new mongoose.Schema({
  userId: String,
  stationName: String,
  stationUrl: String,
});

export default mongoose.model("Favorite", FavoriteSchema);