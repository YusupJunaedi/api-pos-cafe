const db = require("../Configs/dbMySql");

const getAllmenus = () => {
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
};

module.exports = getAllmenus;
