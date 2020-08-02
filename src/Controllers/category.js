const categorysModel = require("../Models/category");
const formResponse = require("../Helpers/forms/formResponse");

const categorysController = {
  getAllCategorys: (_, res) => {
    categorysModel
      .getCategory()
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, data);
      });
  },
};

module.exports = categorysController;
