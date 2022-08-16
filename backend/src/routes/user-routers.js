const express = require("express");
const User = require("../models/user");
const router = new express.Router();

router.post("/user/create", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send({ user, token, message: "New Account Created!" });
  } catch (e) {
    console.log(e);
    if (user.password.length < 8) {
      res.status(500).send({
        message: "Password has to be minimum 8 characters",
      });
    } else if (e.keyPattern.username === 1) {
      res.status(500).send({ message: "Username already taken!" });
    } else {
      res.status(500).send({ message: "Something went wrong" });
    }
  }
});
