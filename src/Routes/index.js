const express = require("express");

const menusRouter = require("./menus");

const indexRouter = express.Router();

indexRouter.use("/", menusRouter);

module.exports = indexRouter;
