const rotaPessoas = require('./routePessoas.js');
const rotaTurmas = require('./routeTurmas.js');
const rotaNiveis = require('./routesNiveis.js');
const bodyparser = require('body-parser');
const express = require('express');

module.exports = (app) => {
    app.use(
        bodyparser.json(),
        rotaPessoas,
        rotaTurmas,
        rotaNiveis
    )
    app.get('/', (req, res) => {
        res.send('bem vindo!')
    })
}

