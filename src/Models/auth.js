const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = require("../Configs/dbMySql");
const authRouter = require("../Controllers/auth");

const authModel = {
  postNewUser: (body) => {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          reject(err);
        }
        const { password } = body;
        bcrypt.hash(password, salt, (err, hashedPassword) => {
          if (err) {
            reject(err);
          }
          const newBody = { ...body, password: hashedPassword };
          const queryString = "INSERT INTO users SET ?";
          db.query(queryString, newBody, (err, data) => {
            if (!err) {
              resolve(data);
            } else {
              reject(err);
            }
          });
        });
      });
    });
  },
  loginUser: (body) => {
    return new Promise((resolve, reject) => {
      const queryString =
        "SELECT username, password, level_id FROM users WHERE username = ?";
      db.query(queryString, body.username, (err, data) => {
        if (err) {
          reject(err);
        }
        if (!data.length) {
          reject("User Not Found");
        } else {
          bcrypt.compare(body.password, data[0].password, (err, result) => {
            if (result) {
              const { username } = body;
              const { level_id } = data[0];
              const payload = {
                username,
                level_id,
              };
              const token = jwt.sign(payload, process.env.SECRET_KEY, {
                expiresIn: "6h",
              });
              const msg = "Login Success";
              resolve({ msg, token });
            }
            if (!result) {
              reject({ msg: "Wrong Password" });
            }
            if (err) {
              reject(err);
            }
          });
        }
      });
    });
  },
};

module.exports = authModel;
