const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3004;

app.use(express.json());

const url = "mongodb://127.0.0.1:27017";
const url2 =
  "mongodb+srv://sriramsahu510:sriram510@cluster0.n1taocb.mongodb.net/userDb?retryWrites=true&w=majority";

mongoose.connect(url2).then(() => {
  app.listen(port, () => {
    console.log(`Node listening on port ${port}`);
  });
  console.log("Connected! to mongodb");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/product", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
