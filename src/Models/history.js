const db = require("../Configs/dbMySql");

const historysModel = {
  getAllHistorys: () => {
    const queryString =
      "SELECT invoice.no_invoice, invoice.cashir, invoice.amount, invoice.create_at, product.name_product ,history.qty, history.total_price FROM invoice JOIN history ON history.invoice=invoice.no_invoice JOIN product ON product.id_product = history.product_id ORDER BY invoice.create_at DESC";
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
  postHistorys: (body) => {
    const { productOrder, invoice, cashir, amount } = body;
    let totalOrder = productOrder.map((item) => {
      return [item.invoice, item.product_id, item.qty, item.total_price];
    });
    const queryString = `START TRANSACTION; INSERT INTO history(invoice, product_id, qty, total_price) VALUES?; INSERT INTO invoice SET no_invoice=?, cashir=?, amount=?; COMMIT;`;
    return new Promise((resolve, reject) => {
      db.query(
        queryString,
        [totalOrder, invoice, cashir, amount],
        (err, data) => {
          if (!err) {
            resolve(data);
          } else {
            reject(err);
          }
        }
      );
    });
  },
};

module.exports = historysModel;
