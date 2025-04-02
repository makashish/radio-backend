import mongoose from "mongoose";

const StationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true }
});

const Station = mongoose.model("Station", StationSchema);
export default Station;