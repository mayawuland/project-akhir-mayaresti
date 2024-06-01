const db = require('./db');

const getAllPengaduan = (callback) => {
  db.query("SELECT * FROM pengaduan", (error, results) => {
    if (error) return callback(error);
    callback(null, results);
  });
};

const createPengaduan = (judul, isi, callback) => {
  db.query("INSERT INTO pengaduan (judul, isi, respon, status) VALUES (?, ?, NULL, 'Diterima')", [judul, isi], (error, results) => {
    if (error) return callback(error);
    callback(null, results);
  });
};

module.exports = {
  getAllPengaduan,
  createPengaduan
};
