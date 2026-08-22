const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Schema
const productSchema = new mongoose.Schema({
  title: String,
  image: String,
  summary: String
});

const Product = mongoose.model("Product", productSchema);

// API Route
app.get("/", (req, res) => {
  res.json({ message: "API Server Running", endpoints: ["/api/products"] });
});

app.get("/api/products", async (req, res) => {
  try {
    const data = await Product.find().lean();
    res.json(data);
  } catch (err) {
    console.error("Failed to load products:", err);
    res.status(500).json({ error: "Unable to load products" });
  }
});

const port = process.env.PORT || 5000;

// Connect before accepting requests so a page refresh cannot race the database connection.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/marvelDB")
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(port, "0.0.0.0", () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
    process.exitCode = 1;
  });
