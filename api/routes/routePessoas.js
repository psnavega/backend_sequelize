const pessoas = require('../controllers/PessoasController.js');
const express = require('express');
const router = express.Router();

router
    .get('/pessoas', pessoas.GetPessoas)
    .get('/pessoas/:id', pessoas.GetPessoa)
    .post('/pessoas', pessoas.PostPessoa)
    .patch('/pessoas/:id', pessoas.PatchPessoa)
    .delete('/pessoas/:id', pessoas.deletePessoa)
    .get('/pessoas/:estudanteId/matriculas/:matriculaId', pessoas.buscaMatricula)
    .post('/pessoas/:estudanteId/matriculas', pessoas.insereMatricula)
    .patch('/pessoas/:estudanteId/matriculas/:matriculaId', pessoas.PatchMatricula)
    .delete('/pessoas/:estudanteId/matriculas/:matriculaId', pessoas.deleteMatricula)

module.exports = router;
