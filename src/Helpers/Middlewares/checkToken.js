const jwt = require("jsonwebtoken");

const formResponse = require("../forms/formResponse");

const checkToken = (req, res, next) => {
  const bearerToken = req.header("x-access-token");
  if (!bearerToken) {
    res.json({
      msg: "Please Login First",
    });
  }
  try {
    const token = bearerToken.split(" ")[1];
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.decodedToken = decode;
    next();
  } catch (e) {
    formResponse.error(res, e);
  }
};

module.exports = checkToken;
