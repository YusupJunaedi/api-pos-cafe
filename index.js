const express = require("express");
const logger = require("morgan");
const indexRouter = require("./src/Routes/index");

const app = express();

const port = 8000;
app.listen(port, () => {
  console.log(`Server is Running at ${port}`);
});
app.use(logger("dev"));

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });
app.use(indexRouter);
