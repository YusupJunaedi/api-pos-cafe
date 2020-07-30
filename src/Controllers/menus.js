const menusModel = require("../Models/menus");
const formResponse = require("../Helpers/forms/formResponse");

const menusController = {
  getAllMenus: (_, res) => {
    menusModel
      .getAllMenus()
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  postNewMenu: (req, res) => {
    menusModel
      .postNewMenu(req.body)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = menusController;
