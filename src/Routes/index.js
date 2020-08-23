const express = require("express");

const menusRouter = require("./menus");
const categorysRouter = require("./category");
// const historysRouter = require("./history");
const historyRouter = require("./history");
const authRouter = require("./auth");
const checkToken = require("../Helpers/Middlewares/checkToken");
const checkAdmin = require("../Helpers/Middlewares/checkAdmin");

const indexRouter = express.Router();

indexRouter.use("/", menusRouter);
indexRouter.use("/categorys", categorysRouter);
indexRouter.use("/history", historyRouter);
indexRouter.use("/auth", authRouter);

module.exports = indexRouter;
