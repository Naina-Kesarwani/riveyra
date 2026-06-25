import express from "express";
import Inquiry from "../models/Inquiry.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    await inquiry.save();

    res.status(201).json({
      success: true,
      message: "Inquiry saved successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

export default router;