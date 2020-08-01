const categorysModel = require("../Models/category");

const categorysController = {
  getAllCategorys: (_, res) => {
    categorysModel
      .getCategory()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};

module.exports = categorysController;
