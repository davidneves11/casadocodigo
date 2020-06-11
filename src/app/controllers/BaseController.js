const templates = require('../views/templates.js');

class BaseController {

    static rota() {
        return {
            home: '/'
        }
    }

    home() {
        return function(req, resp) {
            resp.marko(templates.base.home);
        };
    }
}

module.exports = BaseController;