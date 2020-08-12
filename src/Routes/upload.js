const uploadController = require("../Controllers/upload");

const uploadRouter = require("express").Router();
const controllerUpload = require("../Controllers/upload");

uploadRouter.post("/", controllerUpload.singleUpload, (req, res) => {
  res.json({
    imageURI: `/images/${req.file.filename}`,
  });
});

module.exports = uploadRouter;
