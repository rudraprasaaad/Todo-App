const z = require("zod");

const createTodo = z.object({
  title: z.string(),
  descrtiption: z.string(),
});

const updateTodo = z.object({
  id: z.string(),
});

module.exports = {
  createTodo: createTodo,
  updateTodo: updateTodo,
};
