const niveis = require('../controllers/NiveisController.js');
const express = require('express');
const router = express.Router();

router
    .get('/niveis', niveis.GetNiveis)
    .get('/niveis/:id', niveis.GetNivel)
    .post('/niveis', niveis.PostNivel)
    .patch('/niveis/:id', niveis.PatchNivel)
    .delete('/niveis/:id', niveis.deleteNivel)

module.exports = router;
