const express = require("express");

const menusController = require("../Controllers/menus");

const menusRouter = express.Router();

menusRouter.get("/", menusController.getAllMenus);

module.exports = menusRouter;
