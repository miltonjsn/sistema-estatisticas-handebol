const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/gamesController');

// GET todos os jogos
router.get('/', gamesController.listar);

// POST novo jogo
router.post('/', gamesController.cadastrar);

module.exports = router;
