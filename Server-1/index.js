const express = require("express");
const app = express();
const port = 3000;

const ejs = require("ejs");

app.set("view engine", ejs);

app.get("/", (req, res) => {
  res.send("hi there");
});

app.listen(port, (err) => {
  if (err) {
    console.log.error;
  } else {
    console.log(`App is up and running in the port ${port}`);
  }
});
