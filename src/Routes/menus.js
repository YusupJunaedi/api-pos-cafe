const express = require("express");

const menusController = require("../Controllers/menus");

const menusRouter = express.Router();

menusRouter.get("/", menusController.getAllMenus);
menusRouter.post("/add", menusController.postNewMenu);
menusRouter.get("/menu/:id", menusController.getMenuById);
menusRouter.patch("/update", menusController.updateMenu);
menusRouter.delete("/delete/:id", menusController.deleteMenu);

module.exports = menusRouter;
