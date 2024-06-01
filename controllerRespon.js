const modelPengaduan = require('./modelRespon');

const getPengaduan = (req, res) => {
  modelPengaduan.getAllPengaduan((error, results) => {
    if (error) {
      return res.status(500).json({ message: error.message });
    }
    res.json(results);
  });
};

const getPengaduanById = (req, res) => {
  const { id } = req.params;
  modelPengaduan.getPengaduanById(id, (error, result) => {
    if (error) {
      return res.status(500).json({ message: error.message });
    }
    if (!result) {
      return res.status(404).json({ message: 'Pengaduan not found' });
    }
    res.json(result);
  });
};

const putPengaduan = (req, res) => {
  const { id } = req.params;
  const { respon, status } = req.body;
  modelPengaduan.updatePengaduan(id, respon, status, (error, results) => {
    if (error) {
      return res.status(500).json({ message: error.message });
    }
    res.json({ message: 'Pengaduan updated' });
  });
};

const deletePengaduan = (req, res) => {
  const { id } = req.params;
  modelPengaduan.deletePengaduan(id, (error, results) => {
    if (error) {
      return res.status(500).json({ message: error.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Pengaduan not found' });
    }
    res.json({ message: 'Pengaduan deleted' });
  });
};

module.exports = {
  getPengaduan,
  getPengaduanById,
  putPengaduan,
  deletePengaduan
};
