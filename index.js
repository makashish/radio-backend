import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

  import express from "express";
  
  import cors from "cors";
 
  
  dotenv.config();
  const app = express();
  const PORT = process.env.PORT || 5000;
  const MONGO_URI = process.env.MONGO_URI;
  
  // Middleware
  app.use(cors());
  app.use(express.json());
  
  // Connect to MongoDB
  mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));
  
  // Import Routes
  import stationRoutes from "./routes/stationRoutes.js";
  import favoriteRoutes from "./routes/favoriteRoutes.js";
  
  app.use("/api/stations", stationRoutes);
  app.use("/api/favorites", favoriteRoutes);
  
  // Default Route
  app.get("/", (req, res) => {
    res.send("✅ Radio Streaming API is Running!");
  });
  
  // Start Server
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));