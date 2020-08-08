const express = require("express");

const menusRouter = require("./menus");
const categorysRouter = require("./category");
// const historysRouter = require("./history");
const historyRouter = require("./history");
const cartsRouter = require("./cart");

const indexRouter = express.Router();

indexRouter.use("/", menusRouter);
indexRouter.use("/", categorysRouter);
indexRouter.use("/", historyRouter);
indexRouter.use("/carts", cartsRouter);

module.exports = indexRouter;
