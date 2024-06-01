const db = require('./db');

const getAllPengaduan = (callback) => {
  db.query("SELECT * FROM pengaduan", (error, results) => {
    if (error) return callback(error);
    callback(null, results);
  });
};

const getPengaduanById = (id, callback) => {
  db.query("SELECT * FROM pengaduan WHERE id = ?", [id], (error, results) => {
    if (error) return callback(error);
    callback(null, results[0]);
  });
};

const updatePengaduan = (id, respon, status, callback) => {
  db.query("UPDATE pengaduan SET respon = ?, status = ? WHERE id = ?", [respon, status, id], (error, results) => {
    if (error) return callback(error);
    callback(null, results);
  });
};

const deletePengaduan = (id, callback) => {
  db.query("DELETE FROM pengaduan WHERE id = ?", [id], (error, results) => {
    if (error) return callback(error);
    callback(null, results);
  });
};

module.exports = {
  getAllPengaduan,
  getPengaduanById,
  updatePengaduan,
  deletePengaduan
};
