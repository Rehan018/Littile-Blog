const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb://localhost:27017/postkey"
  )
  .then(() => console.log("Connected mongo db"))
  .catch((e) => console.log(e));
