const jwt = require("jsonwebtoken");

const formResponse = require("../forms/formResponse");

const checkToken = (req, res, next) => {
  const bearerToken = req.header("x-access-token");
  if (!bearerToken) {
    res.json({
      msg: "Please Login First",
    });
  }

  const token = bearerToken.split(" ")[1];
  const decode = jwt.verify(token, process.env.SECRET_KEY);
  if (decode.level_id !== 2) {
    res.json({
      msg: "access blocked!",
    });
  } else {
    req.decodedToken = decode;
    next();
  }
};

module.exports = checkToken;
