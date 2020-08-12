const express = require("express");
// const middlewareSearch = require("../Helpers/Middlewares/middlewireSearch");
const menusController = require("../Controllers/menus");

const menusRouter = express.Router();

menusRouter.get("/", menusController.getAllMenus);
menusRouter.get("/pagination", menusController.getPaginatedMenus);
menusRouter.get("/menu/orderbyprice", menusController.getMenuByPrice);
menusRouter.get("/menu/orderbycategory", menusController.getMenuByCategory);
menusRouter.get("/menu/orderbynew", menusController.getMenuById);
menusRouter.post("/addproduct", menusController.postNewMenu);
menusRouter.patch("/updateproduct", menusController.updateMenu);
menusRouter.delete("/deleteproduct/:id", menusController.deleteMenu);
menusRouter.get("/search/:menu", menusController.searchMenu);

module.exports = menusRouter;
