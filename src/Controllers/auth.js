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
};

module.exports = authController;
