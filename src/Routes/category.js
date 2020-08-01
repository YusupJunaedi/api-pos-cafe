const express = require("express");

const categorysController = require("../Controllers/category");

const categorysRouter = express();

categorysRouter.use("/categorys", categorysController.getAllCategorys);

module.exports = categorysRouter;
