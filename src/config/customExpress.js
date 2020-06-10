require('marko/node-require.js').install();
require('marko/express.js');

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const routes = require('../app/routes/routes.js');

module.exports = () => {

    const app = express();

    app.use('/estatico', express.static('src/app/public'));

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(methodOverride((req, res) => {
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
            console.log('tchau');
            var method = req.body._method;
            delete req.body._method;
            return method;
        }
    }));

    routes(app)

    app.use((req, resp, next) => resp.status(404).marko(require('../app/views/base/erros/404.marko')));

    app.use((erro, req, resp, next) => resp.status(500).marko(require('../app/views/base/erros/500.marko')));

    return app;
}