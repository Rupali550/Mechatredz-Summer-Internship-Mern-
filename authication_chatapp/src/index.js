import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

// ✅ Middleware must be placed BEFORE routes
app.use(express.json());

// Routes

app.use(cookieParser());
app.use("/api/auth", authRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at: http://localhost:${PORT}`);
  connectDB();
});
 

