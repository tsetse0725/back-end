const express = require("express");
const app = express();
const port = 8000;
const fs = require("fs");

app.use(express.json());

app.get("/users", (req, res) => {
  res.status(200).send(users);
});

app.post("/user", async (req, res) => {
  await fs.writeFileSync("./users.json", JSON.stringify(req.body), "utf-8");
  res.status(200).send("successfully");
});

app.put("/users", async (req, res) => {
  const data = await fs.readFileSync("./users.json", "utf-8");
  const result = JSON.parse(data);
  dataJSON = { ...result, userName: "Bataa3456" };
  await fs.writeFileSync("./users.json", JSON.stringify(dataJSON), "utf-8");
  res.send("userName updated");
});

app.put("/use", async (req, res) => {
  const data = await fs.readFileSync("./users.json", "utf-8");
  const result = JSON.parse(data);
  dataJSON = { ...result, phone: "88776655" };
  await fs.writeFileSync("./users.json", JSON.stringify(dataJSON), "utf-8");
  res.send("phone updated");
});

app.post("/us", async (req, res) => {
  const data = await fs.readFileSync("./users.json", "utf-8");
  const result = JSON.parse(data);
  dataJSON = { ...result, job: "softwareEngineer" };
  await fs.writeFileSync("./users.json", JSON.stringify(dataJSON), "utf-8");
  res.send("job added");
});

app.delete("/used", async (req, res) => {
  const data = await fs.readFileSync("./users.json", "utf-8");
  const result = JSON.parse(data);
  const { lastName, ...rest } = result;
  const dataJSON = rest;
  await fs.writeFileSync("./users.json", JSON.stringify(dataJSON), "utf-8");
  res.status(200).send("deleted lastName");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
