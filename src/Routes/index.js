const express = require("express");

const menusRouter = require("./menus");
const categorysRouter = require("./category");
// const historysRouter = require("./history");
const historyRouter = require("./history");
const cartsRouter = require("./cart");
const authRouter = require("./auth");
const checkToken = require("../Helpers/Middlewares/checkToken");
const uploadRouter = require("./upload");

const indexRouter = express.Router();

indexRouter.use("/", checkToken, menusRouter);
indexRouter.use("/uploads", checkToken, uploadRouter);
indexRouter.use("/", categorysRouter);
indexRouter.use("/", historyRouter);
indexRouter.use("/carts", cartsRouter);
indexRouter.use("/auth", authRouter);

module.exports = indexRouter;
