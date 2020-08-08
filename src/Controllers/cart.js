const cartsModel = require("../Models/cart");
const formResponse = require("../Helpers/forms/formResponse");

const cartsController = {
  postAllCarts: (req, res) => {
    cartsModel
      .postCarts(req.body)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(err, data);
      });
  },
  getAllCarts: (_, res) => {
    cartsModel
      .getAllCarts()
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(err, data);
      });
  },
  getCartById: (req, res) => {
    cartsModel
      .getCartById(req.params.id)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(err, data);
      });
  },
  deleteCartById: (req, res) => {
    cartsModel
      .deleteCartById(req.params.id)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(err, data);
      });
  },
  updateCart: (req, res) => {
    cartsModel
      .updateCart(req.body)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(err, data);
      });
  },
};

module.exports = cartsController;
