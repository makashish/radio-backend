import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// ✅ Check if required environment variables are available
if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing in .env file");
  process.exit(1); // Stop server if MongoDB URI is missing
}

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB with improved error handling
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Stop server if connection fails
  });

// ✅ Sample Route (For Testing API)
app.get("/", (req, res) => {
  res.send("🎵 Radio Streaming API is Running!");
});

// ✅ Import API Routes
import stationRoutes from "./routes/stationRoutes.js";
import favoriteRoutes from "./routes/favoriteRoutes.js";

app.use("/api/stations", stationRoutes);
app.use("/api/favorites", favoriteRoutes);

// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));