const db = require("../Configs/dbMySql");

const categorysModel = {
  getCategory: () => {
    const queryString = "SELECT * FROM `category`";
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
};

module.exports = categorysModel;
