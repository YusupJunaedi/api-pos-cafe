const db = require("../Configs/dbMySql");

const getAllmenus = () => {
  return new Promise((resolve, reject) => {
    const queryString =
      "SELECT produk.id_produk, produk.nama_produk, kategori.nama_kategori, produk.harga_produk FROM produk JOIN kategori ON produk.id_kategori=kategori.id_kategori";
    db.query(queryString, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
};

module.exports = getAllmenus;
