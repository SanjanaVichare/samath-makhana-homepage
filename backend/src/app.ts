import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "../routes/auth";

const app = express();

app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Samarth Makhana Backend Running 🚀",
  });
});

app.use("/auth", authRoutes);

export default app;