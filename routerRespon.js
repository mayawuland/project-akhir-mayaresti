const express = require('express');
const router = express.Router();
const controllerPengaduan = require('./controllerRespon');

// Service 2: GET, POST, PUT, and DELETE pengaduan with response and status
router.get('/', controllerPengaduan.getPengaduan);
router.get('/:id', controllerPengaduan.getPengaduanById);
router.put('/:id', controllerPengaduan.putPengaduan);
router.delete('/:id', controllerPengaduan.deletePengaduan); // Add this line for DELETE by ID

module.exports = router;
