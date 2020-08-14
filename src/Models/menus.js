const db = require("../Configs/dbMySql");

const menusModel = {
  getAllMenus: () => {
    return new Promise((resolve, reject) => {
      const queryString =
        "SELECT product.id_product, product.name_product, category.name_category, product.price_product, img_product FROM product JOIN category on product.category_id = category.id_category ORDER BY product.name_product ASC";
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
    const { name_product, category_id, price_product, img_product } = body;
    const queryString =
      "INSERT INTO product SET name_product =?, category_id =?, price_product =?, img_product =?";
    return new Promise((resolve, reject) => {
      db.query(
        queryString,
        [name_product, category_id, price_product, img_product],
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
  updateMenu: (body) => {
    const {
      id_product,
      name_product,
      category_id,
      price_product,
      img_product,
    } = body;
    const queryString =
      "UPDATE product SET name_product=?, category_id=?, price_product=?, img_product=? WHERE id_product=?";
    return new Promise((resolve, reject) => {
      db.query(
        queryString,
        [name_product, category_id, price_product, img_product, id_product],
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
  getMenuByName: (name_product) => {
    const queryString = `SELECT product.id_product, product.name_product, category.name_category, product.price_product, product.img_product FROM product JOIN category on product.category_id = category.id_category WHERE product.name_product LIKE '%${name_product}%' `;
    return new Promise((resolve, reject) => {
      db.query(queryString, (err, data) => {
        if (!err) {
          if (data.length !== 0) {
            resolve(data);
          }
          reject({ msg: "Data Not Found!" });
        } else {
          reject(err);
        }
      });
    });
  },
  sortMenu: (query) => {
    return new Promise((resolve, reject) => {
      const queryString = `SELECT product.id_product, product.name_product, category.name_category, product.price_product, img_product FROM product JOIN category on product.category_id = category.id_category ORDER BY product.${query.by} ${query.order}`;
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  getPaginatedMenus: (page, limit) => {
    return new Promise((resolve, reject) => {
      const offset = (page - 1) * limit;
      const queryString =
        "SELECT product.id_product, product.name_product, category.name_category, product.price_product, img_product FROM product JOIN category on product.category_id = category.id_category ORDER BY product.name_product ASC LIMIT ? OFFSET ?";
      db.query(queryString, [parseInt(limit), offset], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};

module.exports = menusModel;
