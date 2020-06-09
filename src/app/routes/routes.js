const LivroDao = require('../infra/LivroDao.js');
const ConnectionFactory = require('../infra/ConnectionFactory.js');

module.exports = app => {

    app.get('/', (req, resp) => {
        resp.marko(
            require('../views/base/home/home.marko')
        );
    });

    app.get('/livros', (req, resp) => {

        const connection = new ConnectionFactory().getConnection();
        const livroDao = new LivroDao(connection);

        livroDao.lista()
            .then(livros =>
                resp.marko(
                    require('../views/livros/lista/lista.marko'), {
                        livros
                    }
                )
            )
            .catch(erro => console.log(erro));

    });

    app.get('/livros/form', (req, resp) => {
        resp.marko(require('../views/livros/form/form.marko'), { livro: {} });
    });

    app.get('/livros/form/:id', (req, resp) => {
        const id = req.params.id;
        const connection = new ConnectionFactory().getConnection();
        const livroDao = new LivroDao(connection);

        livroDao.buscaPorId(id)
            .then(livro => {
                console.log(livro);
                if (!livro) resp.status(404).end();
                resp.marko(
                    require('../views/livros/form/form.marko'), { livro }
                )
            })
            .catch(erro => console.log(erro));
    });

    app.post('/livros', (req, resp) => {
        console.log(req.body);

        const connection = new ConnectionFactory().getConnection();
        const livroDao = new LivroDao(connection);

        livroDao.adiciona(req.body)
            .then(resp.redirect('/livros'))
            .catch(erro => console.log(erro));
    });

    app.put('/livros', (req, resp) => {
        console.log(req.body);
        const connection = new ConnectionFactory().getConnection();
        const livroDao = new LivroDao(connection);

        livroDao.atualiza(req.body)
            .then(resp.redirect('/livros'))
            .catch(erro => console.log(erro));
    });

    app.delete('/livros/:id', (req, resp) => {
        const id = req.params.id;

        const connection = new ConnectionFactory().getConnection();
        const livroDao = new LivroDao(connection);
        livroDao.remove(id)
            .then(() => resp.status(200).end())
            .catch(erro => console.log(erro));
    });
}