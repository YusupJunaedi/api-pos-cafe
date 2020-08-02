const express = require("express");

const menusRouter = require("./menus");
const categorysRouter = require("./category");
const historysRouter = require("./history");
const historyRouter = require("./history");

const indexRouter = express.Router();

indexRouter.use("/", menusRouter);
indexRouter.use("/", categorysRouter);
indexRouter.use("/", historyRouter);

module.exports = indexRouter;
