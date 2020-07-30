const express = require("express");
// const middlewareSearch = require("../Helpers/Middlewares/middlewireSearch");
const menusController = require("../Controllers/menus");

const menusRouter = express.Router();

menusRouter.get("/", menusController.getAllMenus);
menusRouter.post("/add", menusController.postNewMenu);
menusRouter.get("/menu/:id", menusController.getMenuById);
menusRouter.patch("/update", menusController.updateMenu);
menusRouter.delete("/delete/:id", menusController.deleteMenu);
menusRouter.get("/search/:menu", menusController.searchMenu);

module.exports = menusRouter;
