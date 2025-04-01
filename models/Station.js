import mongoose from "mongoose";

const StationSchema = new mongoose.Schema({
  name: String,
  url: String,
});

export default mongoose.model("Station", StationSchema);