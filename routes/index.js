var express = require('express');
var router = express.Router();

const HomeController = require('../controllers/HomeController')
const UsuariosController = require('../controllers/UsuariosController');

/* GET home page. */
router.get('/', HomeController.index);

router.get('/users', UsuariosController.index);

module.exports = router;
