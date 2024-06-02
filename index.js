const express = require("express");
const jwt = require("jsonwebtoken");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You've sent the wrong inputs",
    });
    return;
  }

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.status(200).json({
    msg: "Todo Created",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});

  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);

  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You've sent wrong input",
    });
    return;
  }

  await todo.updateOne(
    {
      _id: updatePayload.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(3000, () => {
  console.log("Server is fuckin started!!");
});
