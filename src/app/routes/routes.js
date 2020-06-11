const livroRotas = require('./livroRotas.js');
const baseRotas = require('./baseRotas.js');

module.exports = app => {

    baseRotas(app);
    livroRotas(app);
}