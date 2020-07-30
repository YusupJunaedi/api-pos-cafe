const menusModel = require("../Models/menus");
const formResponse = require("../Helpers/forms/formResponse");

const menusController = {
  getAllMenus: (_, res) => {
    menusModel()
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, data);
      });
  },
};

module.exports = menusController;
