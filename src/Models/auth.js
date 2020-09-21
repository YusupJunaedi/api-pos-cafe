const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = require("../Configs/dbMySql");
const authRouter = require("../Controllers/auth");

const authModel = {
  postNewUser: (body) => {
    return new Promise((resolve, reject) => {
      const qs = "SELECT email FROM users WHERE email = ?";
      db.query(qs, [body.email], (err, data) => {
        if (data.length) {
          reject({ msg: "account is ready" });
        } else {
          bcrypt.genSalt(10, (err, salt) => {
            if (err) {
              reject(err);
            }
            const { password, level_id, email } = body;
            const username = body.username;
            bcrypt.hash(password, salt, (err, hashedPassword) => {
              if (err) {
                reject(err);
              }
              const newBody = { ...body, password: hashedPassword };
              const queryString = "INSERT INTO users SET ?";
              db.query(queryString, newBody, (err, data) => {
                if (!err) {
                  const payload = {
                    newBody,
                  };
                  const token = jwt.sign(payload, process.env.SECRET_KEY, {
                    expiresIn: "6h",
                  });
                  const id_user = data.insertId;
                  const msg = "Register Success";
                  resolve({ msg, token, level_id, id_user, username });
                  // resolve(data);
                } else {
                  reject(err);
                }
              });
            });
          });
        }
      });
    });
  },
  updateUser: (body) => {
    const { id_user } = body;
    const queryString = "UPDATE users SET ? WHERE id_user=?";
    return new Promise((resolve, reject) => {
      db.query(queryString, [body, id_user], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  getDataUser: (id) => {
    const string = "haii";
    const queryString =
      "SELECT id_user, username, image, email FROM users WHERE id_user = ?";
    return new Promise((resolve, reject) => {
      db.query(queryString, [id], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  loginUser: (body) => {
    return new Promise((resolve, reject) => {
      const queryString = "SELECT * FROM users WHERE email = ?";
      db.query(queryString, [body.email], (err, data) => {
        if (err) {
          reject(err);
        }
        if (!data.length) {
          reject("User Not Found");
        } else {
          bcrypt.compare(body.password, data[0].password, (err, result) => {
            if (result) {
              const { email } = body;
              const { level_id, username, id_user, password, image } = data[0];
              const payload = {
                email,
                level_id,
                password,
              };
              // const token = jwt.sign(payload, process.env.SECRET_KEY, {
              //   expiresIn: "6h",
              // });
              const token = jwt.sign(payload, process.env.SECRET_KEY, {
                expiresIn: "6h",
              });
              const msg = "Login Success";
              resolve({ msg, token, level_id, username, id_user, image });
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
