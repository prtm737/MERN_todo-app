const mongoose = require("mongoose");

const dbconnecturl = process.env.NOTER_MONGODB_URL;

mongoose.connect(dbconnecturl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
