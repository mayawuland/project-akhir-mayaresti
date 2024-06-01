const express = require('express');
const router = express.Router();
const controllerPengaduan = require('./controllerPengaduan');

// Service 1: GET and POST pengaduan without response
router.get('/', controllerPengaduan.getPengaduan);
router.post('/', controllerPengaduan.postPengaduan);


module.exports = router;
