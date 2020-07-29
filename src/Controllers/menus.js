const menusModel = require("../Models/menus");

const menusController = {
  getAllMenus: (_, res) => {
    menusModel()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};

module.exports = menusController;
