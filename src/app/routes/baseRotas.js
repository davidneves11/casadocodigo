const BaseController = require('../controllers/BaseController.js');
const baseController = new BaseController();

const rotasBase = BaseController.rota();


module.exports = app => {

    app.get(rotasBase.home, baseController.home());

}