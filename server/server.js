import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import inquiryRoutes from "./routes/inquiryRoutes.js";
dotenv.config();
const PORT = process.env.PORT || 5000;



const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api/inquiries", inquiryRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


