var express = require('express');
var router = express.Router();

const HomeController = require('../controllers/HomeController');
const AgendaController = require('../controllers/AgendaController');

/* GET home page. */
router.get('/', HomeController.index);
router.get('/agenda', AgendaController.index);
router.get('/agenda/crear', AgendaController.crear);
router.post('/agenda', AgendaController.guardar);

module.exports = router;
