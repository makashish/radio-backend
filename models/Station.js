import mongoose from "mongoose";

const stationSchema = new mongoose.Schema({
  name: String,
  streamUrl: String,
});

export default mongoose.model("Station", stationSchema);