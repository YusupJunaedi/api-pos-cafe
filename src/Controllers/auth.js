const formResponse = require("../Helpers/forms/formResponse");
const authModel = require("../Models/auth");

const authController = {
  register: (req, res) => {
    authModel
      .postNewUser(req.body)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  login: (req, res) => {
    authModel
      .loginUser(req.body)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  updateUser: (req, res) => {
    authModel
      .updateUser(req.body)
      .then((data) => {
        const responseData = {
          ...req.body,
        };
        formResponse.succes(res, responseData);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  getDataUser: (req, res) => {
    authModel
      .getDataUser(req.params.id)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = authController;
