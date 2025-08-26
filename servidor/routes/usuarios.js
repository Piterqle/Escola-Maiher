const express = require('express')
const router = express.Router();

const usuariosControler = require('../controllers/usuariosController')

router.post('/cadastro', usuariosControler.cadastro);
router.post('/login', usuariosControler.login)
router.post('/checkAuth', usuariosControler.auth)

module.exports = router