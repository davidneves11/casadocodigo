require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();

const routes = require('../app/routes/routes.js');
routes(app)

module.exports = app;