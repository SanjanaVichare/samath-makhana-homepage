import dotenv from "dotenv";
dotenv.config();

import app from "./app";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "../routes/auth";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/auth", authRoutes);

app.listen(5000, () => {

    console.log("🚀 Backend running");
>>>>>>> uiux
})