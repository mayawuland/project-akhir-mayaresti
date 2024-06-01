const modelPengaduan = require('./modelPengaduan');

const getPengaduan = (req, res) => {
  modelPengaduan.getAllPengaduan((error, results) => {
    if (error) {
      return res.status(500).json({ message: error.message });
    }
    res.json(results);
  });
};

const postPengaduan = (req, res) => {
  const { judul, isi } = req.body;
  modelPengaduan.createPengaduan(judul, isi, (error, results) => {
    if (error) {
      return res.status(500).json({ message: error.message });
    }
    res.status(201).json({ message: 'Pengaduan created' });
  });
};



module.exports = {
  getPengaduan,
  postPengaduan
};
