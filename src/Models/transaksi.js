const db = require("../Configs/dbMySql");

const transaksiModel = {
  getAllTransaksi: () => {
    const queryString =
      "SELECT * FROM `transaksi` ORDER BY transaksi.id_trans DESC";
    return new Promise((resolve, reject) => {
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  postTransaksi: (body) => {
    const { invoice, cashier, orders, amount } = body;
    const queryString = `INSERT INTO transaksi SET invoice=?, name_cashier =?, orders =?, amount =?`;
    return new Promise((resolve, reject) => {
      db.query(queryString, [invoice, cashier, orders, amount], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};

module.exports = transaksiModel;
