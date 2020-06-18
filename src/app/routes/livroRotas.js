const LivroController = require('../controllers/LivroController.js');
const livroController = new LivroController();

const Livro = require('../models/Livro.js');

const rotasLivro = LivroController.rotas();

const BaseController = require('../controllers/baseController');

module.exports = app => {

    app.use(rotasLivro.autenticadas, (req, resp, next) => {

        if (req.isAuthenticated()) {
            next();
        } else {
            resp.redirect(BaseController.rotas().login);
        }
    });

    app.get(rotasLivro.lista, livroController.lista());

    app.route(rotasLivro.cadastro)
        .get(livroController.formCadastro())
        .post(Livro.validacoes(), livroController.cadastra())
        .put(livroController.edita());

    app.get(rotasLivro.edicao, livroController.formEdicao());

    app.delete(rotasLivro.delecao, livroController.remove());
}