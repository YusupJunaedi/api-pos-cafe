const menusModel = require("../Models/menus");
const formResponse = require("../Helpers/forms/formResponse");

const menusController = {
  getAllMenus: (_, res) => {
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
  searchMenu: (req, res) => {
    menusModel
      .searchMenu(req.query)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  sortMenu: (req, res) => {
    menusModel
      .sortMenu(req.query)
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
  getMenuByName: (req, res) => {
    menusModel
      .getMenuByName(req.query.name_product)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = menusController;
