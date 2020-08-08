const express = require("express");

const cartsController = require("../Controllers/cart");

const cartsRouter = express.Router();

cartsRouter.get("/", cartsController.getAllCarts);
cartsRouter.post("/add", cartsController.postAllCarts);
cartsRouter.patch("/update", cartsController.updateCart);
cartsRouter.get("/:id", cartsController.getCartById);
cartsRouter.delete("/delete/:id", cartsController.deleteCartById);

module.exports = cartsRouter;
