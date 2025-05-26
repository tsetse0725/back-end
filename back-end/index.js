const express = require("express");
const app = express();
const port = 8000;

const array = [1, 2, 3, 4];

app.get("/array", (req, res) => {
  res.status(200).send(array);
});

app.post("/array", (req, res) => {
  array.push(4);
  res.status(200).send("successfully");
});

app.delete("/array", (req, res) => {
  array.pop();
  res.status(200).send("deleted");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
