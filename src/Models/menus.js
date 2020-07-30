const db = require("../Configs/dbMySql");

const menusModel = {
  getAllMenus: () => {
    return new Promise((resolve, reject) => {
      const queryString =
        "SELECT product.id_product, product.name_product, category.name_category, product.price_product FROM product JOIN category on product.category_id = category.id_category";
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  postNewMenu: (body) => {
    const { name_product, category_id, price_product } = body;
    const queryString =
      "INSERT INTO product SET name_product =?, category_id =?, price_product =?";
    return new Promise((resolve, reject) => {
      db.query(
        queryString,
        [name_product, category_id, price_product],
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
  getMenuById: (id) => {
    return new Promise((resolve, reject) => {
      const queryString =
        "SELECT product.id_product, product.name_product, category.name_category, product.price_product FROM product JOIN category on product.category_id = category.id_category WHERE product.id_product = ?";
      db.query(queryString, [id], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  updateMenu: (body) => {
    const { id_product, name_product, category_id, price_product } = body;
    const queryString =
      "UPDATE product SET name_product=?, category_id=?, price_product=? WHERE id_product=?";
    return new Promise((resolve, reject) => {
      db.query(
        queryString,
        [name_product, category_id, price_product, id_product],
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
  deleteMenu: (id) => {
    const queryString = "DELETE FROM `product` WHERE id_product = ?";
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
  searchMenu: (menu) => {
    const queryString =
      "SELECT product.id_product, product.name_product, category.name_category, product.price_product FROM product JOIN category on product.category_id = category.id_category WHERE product.name_product=? ";
    return new Promise((resolve, reject) => {
      db.query(queryString, [menu], (err, data) => {
        if (!err) {
          if (data.length !== 0) {
            resolve(data);
          }
          reject("Data not found !");
        } else {
          reject(err);
        }
      });
    });
  },
};

module.exports = menusModel;
