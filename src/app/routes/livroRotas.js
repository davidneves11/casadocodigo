const LivroController = require('../controllers/LivroController.js');
const livroController = new LivroController();

const Livro = require('../models/Livro.js');

const rotasLivro = LivroController.rotas();

module.exports = app => {

    app.get(rotasLivro.lista, livroController.lista());

    app.route(rotasLivro.cadastro)
        .get(livroController.formCadastro())
        .post(Livro.validacoes(), livroController.cadastra())
        .put(livroController.edita());

    app.get(rotasLivro.edicao, livroController.formEdicao());

    app.delete(rotasLivro.delecao, livroController.remove());
}