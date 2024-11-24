const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();


const MONGO_URL = process.env.MONGO_URL;

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("Hi, I am root");
});



app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});