const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: "string",
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: "string",
      required: true,
      minlength: 8,
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("User", userSchema);

module.exports = user;
