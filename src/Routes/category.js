const express = require("express");

const categorysController = require("../Controllers/category");

const categorysRouter = express();

categorysRouter.get("/categorys", categorysController.getAllCategorys);

module.exports = categorysRouter;
