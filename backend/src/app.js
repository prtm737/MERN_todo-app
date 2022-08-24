const express = require("express");

require("./db/mongoose.js");

const userRouter = require("./routes/user-routers");

const app = express();

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "*");
  res.set("Access-Control-Allow-Headers", "*");
  if (res.method == "OPTIONS") {
    res.status(200).end();
    return;
  }
  next();
});

app.use(express.json());

app.use(userRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
