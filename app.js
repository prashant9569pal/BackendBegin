const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/prashant", (req, res) => {
  res.send("This is Prashant Pal Tango Charlie");
});
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`);
});
