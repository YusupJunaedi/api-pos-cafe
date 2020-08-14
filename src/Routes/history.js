const express = require("express");
const historysController = require("../Controllers/history");

const historyRouter = express.Router();

historyRouter.get("/", historysController.getAllHistorys);
historyRouter.post("/addhistory", historysController.postHistorys);

module.exports = historyRouter;
