const BaseController = require('../controllers/BaseController.js');
const baseController = new BaseController();

const rotasBase = BaseController.rotas();


module.exports = app => {

    app.get(rotasBase.home, baseController.home());

    app.route(rotasBase.login)
        .get(baseController.login())
        .post(baseController.efetuaLogin());

}