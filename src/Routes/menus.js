const express = require("express");
// const middlewareSearch = require("../Helpers/Middlewares/middlewireSearch");
const menusController = require("../Controllers/menus");
const checkToken = require("../Helpers/Middlewares/checkToken");
const checkAdmin = require("../Helpers/Middlewares/checkAdmin");
const uploadImg = require("../Helpers/Middlewares/upload");

const menusRouter = express.Router();

menusRouter.get("/", menusController.getAllMenus);
menusRouter.get("/search", menusController.searchMenu);
menusRouter.get("/sort", menusController.sortMenu);
menusRouter.get("/pagination", menusController.getPaginatedMenus);
menusRouter.post(
  "/addproduct",
  uploadImg.singleUpload,
  menusController.postNewMenu
);
menusRouter.patch("/updateproduct", menusController.updateMenu);
menusRouter.delete("/deleteproduct/:id", menusController.deleteMenu);

module.exports = menusRouter;
