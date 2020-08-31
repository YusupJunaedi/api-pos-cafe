const express = require("express");
const transaksiController = require("../Controllers/transaksi");

const transaksiRouter = express.Router();

transaksiRouter.get("/", transaksiController.getAllTransaksi);
transaksiRouter.post("/addtransaksi", transaksiController.postTransaksi);

module.exports = transaksiRouter;
