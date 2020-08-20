const express = require("express");

const menusRouter = require("./menus");
const categorysRouter = require("./category");
// const historysRouter = require("./history");
const historyRouter = require("./history");
const cartsRouter = require("./cart");
const authRouter = require("./auth");
const uploadRouter = require("./upload");
const checkToken = require("../Helpers/Middlewares/checkToken");
const checkAdmin = require("../Helpers/Middlewares/checkAdmin");

const indexRouter = express.Router();

indexRouter.use("/", menusRouter);
indexRouter.use("/categorys", checkToken, categorysRouter);
indexRouter.use("/history", checkAdmin, historyRouter);
indexRouter.use("/auth", authRouter);

module.exports = indexRouter;
