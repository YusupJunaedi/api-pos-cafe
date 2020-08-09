const express = require("express");

const cartsController = require("../Controllers/cart");

const cartsRouter = express.Router();

cartsRouter.delete("/delete", cartsController.deleteAllCart);
cartsRouter.get("/", cartsController.getAllCarts);
cartsRouter.get("/total", cartsController.getSumCarts);
cartsRouter.get("/:id", cartsController.getCartById);
cartsRouter.post("/add", cartsController.postAllCarts);
cartsRouter.patch("/update", cartsController.updateCart);
cartsRouter.delete("/delete/:id", cartsController.deleteCartById);

module.exports = cartsRouter;
