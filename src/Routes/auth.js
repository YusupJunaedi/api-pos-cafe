const express = require("express");
const authController = require("../Controllers/auth");

const authRouter = express.Router();

authRouter.post("/register", authController.register);
authRouter.get("/login", authController.login);

module.exports = authRouter;
