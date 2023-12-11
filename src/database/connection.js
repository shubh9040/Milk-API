const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);
try {
  const mongodbConnection=mongoose.connect(process.env.MONGODB_CONNECTION_URL);
  if(!mongodbConnection){
    console.log("Could not connect to MongoDB")
  }
  console.log("Connected to MongoDB")
} catch (e) {
  console.log("Could not connect to MongoDB");
}
