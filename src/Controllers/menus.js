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
  getMenuByCategory: (req, res) => {
    menusModel
      .getMenuByCategory()
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  getMenuByPrice: (req, res) => {
    menusModel
      .getMenuByPrice()
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  getMenuById: (req, res) => {
    menusModel
      .getMenuById()
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
        const responseData = {
          id_product: data.insertId,
          ...req.body,
        };
        formResponse.succes(res, responseData);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  updateMenu: (req, res) => {
    menusModel
      .updateMenu(req.body)
      .then((data) => {
        const responseData = {
          ...req.body,
        };
        formResponse.succes(res, responseData);
      })
      .catch((err) => {
        formResponse.error(res_err);
      });
  },
  deleteMenu: (req, res) => {
    menusModel
      .deleteMenu(req.params.id)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  searchMenu: (req, res) => {
    menusModel
      .searchMenu(req.params.menu)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  getPaginatedMenus: (req, res) => {
    const { page, limit } = req.query;
    menusModel
      .getPaginatedMenus(page, limit)
      .then((data) => {
        formResponse.pagination(req, res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = menusController;
