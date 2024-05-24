const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");

const Schema = mongoose.Schema;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

const FoundationSchema = new Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  imageUrl: { type: String, require: true },
});
const FoundationModel = mongoose.model("FoundationModel", FoundationSchema);

const DB_URL =
  "mongodb+srv://gafarovgg:azmp101@cluster0.siwuhot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.get("/api/products", async (req, res) => {
  try {
    const products = await FoundationModel.find();
    if (products.length > 0) {
      res.status(200).send({ message: "success", data: products });
    } else {
      res.status(204).send({ message: "data is empty" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await FoundationModel.findById(id);
    if (id) {
      res.status(200).send({ message: "success", data: product });
    } else {
      res.status(404).send({ message: "data is empty" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await FoundationModel.findByIdAndDelete(id);
    res
      .status(200)
      .send({ message: "deleted successfully", data: deletedProduct });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.post("/api/products", async (req, res) => {
  try {
    const newModel = new FoundationModel({ ...req.body });
    await newModel.save();
    res.status(201).send({ message: "posted successfully", data: newModel });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

mongoose.connect(DB_URL).then(() => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
  console.log("Connected!");
});
