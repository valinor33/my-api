const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    todo: String,
    completed: Boolean,
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
