const express = require('express');
const bodyparser = require('body-parser');
const http = require('http');
const router = require('./routes/index.js')
const app = express();

router(app);

const port = process.env.PORT || 4002;

http.createServer(app).listen(port);
    