const express = require("express");
// const middlewareSearch = require("../Helpers/Middlewares/middlewireSearch");
const menusController = require("../Controllers/menus");
const checkToken = require("../Helpers/Middlewares/checkToken");
const checkAdmin = require("../Helpers/Middlewares/checkAdmin");
const uploadImg = require("../Helpers/Middlewares/upload");

const menusRouter = express.Router();

menusRouter.get("/", checkToken, menusController.getAllMenus);
menusRouter.get("/search", checkToken, menusController.getMenuByName);
menusRouter.get("/sort", checkToken, menusController.sortMenu);
menusRouter.get("/pagination", checkToken, menusController.getPaginatedMenus);
menusRouter.post(
  "/addproduct",
  checkAdmin,
  uploadImg.singleUpload,
  menusController.postNewMenu
);
menusRouter.patch(
  "/updateproduct",
  uploadImg.singleUpload,
  menusController.updateMenu
);
menusRouter.delete(
  "/deleteproduct/:id",
  checkAdmin,
  menusController.deleteMenu
);

module.exports = menusRouter;
