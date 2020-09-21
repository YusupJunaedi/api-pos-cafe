const express = require("express");
const authController = require("../Controllers/auth");
const uploadImg = require("../Helpers/Middlewares/upload");

const authRouter = express.Router();

authRouter.get("/getdata/:id", authController.getDataUser);
authRouter.post("/register", authController.register);
authRouter.patch("/edit", uploadImg.singleUpload, authController.updateUser);
authRouter.post("/login", authController.login);

module.exports = authRouter;
