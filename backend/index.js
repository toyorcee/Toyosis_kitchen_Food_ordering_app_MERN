const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const authController = require("./controllers/authController");
const productController = require("./controllers/productController");
const uploadController = require("./controllers/uploadController");
const app = express();

// connect our db
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL);

// API Creation
app.get("/", (req, res) => {
  res.send("Express App is Running");
});

// routes & middlewares
// these 2 middlewares make req.body accessible, otherwise it would be undefined.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("public/images"));
app.use("/auth", authController);
app.use("/product", productController);
app.use("/upload", uploadController);

// start our server
app.listen(process.env.PORT, () =>
  console.log("Server has been started successfully")
);

// server is on port 4000, client is on port 3000, cors() removes that error
