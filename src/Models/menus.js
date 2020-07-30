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
};

module.exports = menusModel;
