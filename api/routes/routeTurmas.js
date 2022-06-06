const turmas = require('../controllers/TurmasController.js');
const express = require('express');
const router = express.Router();

router
    .get('/turmas', turmas.GetTurmas)
    .get('/turmas/:id', turmas.GetTurma)
    .post('/turmas', turmas.PostTurma)
    .patch('/turmas/:id', turmas.PatchTurma)
    .delete('/turmas/:id', turmas.deleteTurma)

module.exports = router;
