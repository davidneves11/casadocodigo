const { validationResult } = require("express-validator");
const LivroDao = require('../infra/livroDao.js');
const ConnectionFactory = require('../infra/ConnectionFactory.js');
const templates = require('../views/templates.js');

class LivroController {

    static rotas() {
        return {
            autenticadas: '/livros*',
            lista: '/livros',
            cadastro: '/livros/form',
            edicao: '/livros/form/:id',
            delecao: '/livros/:id'
        }
    }

    lista() {
        return (req, resp) => {

            const connection = new ConnectionFactory().getConnection();
            const livroDao = new LivroDao(connection);

            livroDao.lista()
                .then(livros =>
                    resp.marko(
                        templates.livros.lista, {
                            livros
                        }
                    )
                )
                .catch(erro => console.log(erro));
        };
    }

    formCadastro() {
        return (req, resp) => {
            resp.marko(templates.livros.form, { tituloDoForm: 'Cadastro de livro', livro: {} });
        };
    }

    formEdicao() {
        return (req, resp) => {
            const id = req.params.id;
            const connection = new ConnectionFactory().getConnection();
            const livroDao = new LivroDao(connection);

            livroDao.buscaPorId(id)
                .then(livro => {
                    resp.marko(templates.livros.form, { tituloDoForm: 'Alteração de cadastro', livro })
                })
                .catch(erro => console.log(erro));
        };
    }

    cadastra() {
        return (req, resp) => {
            console.log(req.body);

            const connection = new ConnectionFactory().getConnection();
            const livroDao = new LivroDao(connection);

            const erros = validationResult(req);

            if (!erros.isEmpty()) {
                return resp.marko(templates.livros.form, { livro: req.body, errosValidacao: erros.array() });
            }
            livroDao.adiciona(req.body)
                .then(resp.redirect(LivroController.rotas().lista))
                .catch(erro => console.log(erro));
        };
    }

    edita() {
        return (req, resp) => {
            console.log(req.body);
            const connection = new ConnectionFactory().getConnection();
            const livroDao = new LivroDao(connection);

            livroDao.atualiza(req.body)
                .then(resp.redirect(LivroController.rotas().lista))
                .catch(erro => console.log(erro));
        };
    }

    remove() {
        return (req, resp) => {
            const id = req.params.id;

            const connection = new ConnectionFactory().getConnection();
            const livroDao = new LivroDao(connection);
            livroDao.remove(id)
                .then(() => resp.status(200).end())
                .catch(erro => console.log(erro));
        };
    }
}

module.exports = LivroController;