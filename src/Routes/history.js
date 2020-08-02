const express = require("express");
const historysController = require("../Controllers/history");

const historyRouter = express.Router();

historyRouter.get("/historys", historysController.getAllHistorys);
historyRouter.post("/addhistorys", historysController.postHistorys);

module.exports = historyRouter;
