import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    company: String,
    services: [String],
    budget: String,
    projectDescription: String,
  },
  { timestamps: true }
);

export default mongoose.model("Inquiry", inquirySchema);