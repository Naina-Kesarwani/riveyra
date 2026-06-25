import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import inquiryRoutes from "./routes/inquiryRoutes.js";
const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api/inquiries", inquiryRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});