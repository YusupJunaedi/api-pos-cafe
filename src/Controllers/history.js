const historysModel = require("../Models/history");
const formResponse = require("../Helpers/forms/formResponse");

const historysController = {
  getAllHistorys: (_, res) => {
    historysModel
      .getAllHistorys()
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  postHistorys: (req, res) => {
    historysModel
      .postHistorys(req.body)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = historysController;
