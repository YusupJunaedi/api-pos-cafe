const transaksiModel = require("../Models/transaksi");
const formResponse = require("../Helpers/forms/formResponse");

const transaksiController = {
  getAllTransaksi: (_, res) => {
    transaksiModel
      .getAllTransaksi()
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  postTransaksi: (req, res) => {
    transaksiModel
      .postTransaksi(req.body)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = transaksiController;
