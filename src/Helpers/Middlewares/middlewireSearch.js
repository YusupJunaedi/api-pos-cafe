const db = require("../../Configs/dbMySql");

const checkData = (menu) => {
  const queryString =
    "SELECT product.id_product, product.name_product, category.name_category, product.price_product FROM product JOIN category on product.category_id = category.id_category WHERE product.name_product=? ";
  return new Promise((resolve, reject) => {
    db.query(queryString, [menu], (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
};

const searchMenu = (req, res) => {
  checkData(req.params.menu).then((data) => {
    const item = res.json(data);
    if (item.length === 0) {
      console.log("data not found");
    } else {
      next();
    }
  });
};

module.exports = searchMenu;
