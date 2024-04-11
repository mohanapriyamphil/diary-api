const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const postRoutes = require('./routes/posts.js');

app.use(express.json());

app.use('/api/posts', postRoutes);


//mongdb connection and server connection
const port = process.env.PORT
const connectToMongoDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

connectToMongoDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  })
  .catch((err) => console.log(err.message));
