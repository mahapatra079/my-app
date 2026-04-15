const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://localhost:27017/marvelDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

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
  const data = await Product.find();
  res.json(data);
});

// Start server
// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

app.listen(5000, '0.0.0.0', () => {
  console.log("Server running on port 5000");
});
