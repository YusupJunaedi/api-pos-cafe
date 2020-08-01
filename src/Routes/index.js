const express = require("express");

const menusRouter = require("./menus");
const categorysRouter = require("./category");

const indexRouter = express.Router();

indexRouter.use("/", menusRouter);
indexRouter.use("/", categorysRouter);

module.exports = indexRouter;
