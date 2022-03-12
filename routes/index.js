var express = require('express');
var router = express.Router();

<<<<<<< HEAD
const HomeController = require('../controllers/HomeController');
const AgendaController = require('../controllers/AgendaController');

=======
const HomeController = require('../controllers/HomeController')
const UsuariosController = require('../controllers/UsuariosController');
>>>>>>> 475c6bc4465de33a2ba4383c511f07e986c5bd39

/* GET home page. */
router.get('/', HomeController.index);
router.get('/agenda', AgendaController.index);


router.get('/users', UsuariosController.index);

module.exports = router;
