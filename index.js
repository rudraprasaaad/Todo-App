const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());
app.post("/todo", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
});
app.get("/todos", (req, res) => {});
app.put("/completed", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is fuckin started!!");
});
