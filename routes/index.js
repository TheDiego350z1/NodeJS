var express = require('express');
var router = express.Router();

const HomeController = require('../controllers/HomeController');
const AgendaController = require('../controllers/AgendaController');


/* GET home page. */
router.get('/', HomeController.index);
router.get('/agenda', AgendaController.index);


module.exports = router;
