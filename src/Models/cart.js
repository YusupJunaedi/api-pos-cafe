const db = require("../Configs/dbMySql");

const cartsModel = {
  postCarts: (body) => {
    const { product_id, qty, total_price } = body;
    const queryString =
      "INSERT INTO cart SET product_id=?, qty=?, total_price=?";
    return new Promise((resolve, reject) => {
      db.query(queryString, [product_id, qty, total_price], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  getAllCarts: () => {
    const queryString =
      "SELECT cart.id_cart, product.name_product, product.price_product, cart.qty, cart.total_price, product.img_product FROM product JOIN cart ON cart.product_id=product.id_product ORDER BY id_cart ";
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
  getCartById: (id) => {
    const queryString = "SELECT * FROM cart WHERE product_id=?";
    return new Promise((resolve, reject) => {
      db.query(queryString, [id], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  deleteCartById: (id) => {
    const queryString = "DELETE FROM cart WHERE product_id=?";
    return new Promise((resolve, reject) => {
      db.query(queryString, [id], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  updateCart: (body) => {
    const { qty, total_price, id_cart } = body;
    const queryString = "UPDATE cart SET qty=?, total_price=? WHERE id_cart=?";
    return new Promise((resolve, reject) => {
      db.query(queryString, [qty, total_price, id_cart], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};

module.exports = cartsModel;
