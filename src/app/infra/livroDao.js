module.exports = class LivroDao {

    constructor(connection) {
        this._connection = connection;
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._connection.query('SELECT * FROM livros', function(erro, resultado) {
                if (erro) {
                    return reject({
                        mensagem: 'Não foi possível listar os livros!',
                        erro
                    });
                } else {
                    return resolve(resultado);
                }
            });
        })
    }

    adiciona(livro) {
        return new Promise((resolve, reject) => {
            this._connection.query(`
                INSERT INTO LIVROS (
                        titulo,
                        preco,
                        descricao
                    ) values (?, ?, ?)
                `, [
                    livro.titulo,
                    livro.preco,
                    livro.descricao
                ],
                (erro, resultado) => {
                    if (erro) {
                        return reject({
                            mensagem: 'Não foi possível adicionar o livro',
                            erro,
                        });
                    } else {
                        resolve(resultado);
                    }
                });
        });
    }

    remove(id) {

        return new Promise((resolve, reject) => {
            this._connection.query(
                `
                    DELETE 
                    FROM livros
                    WHERE id = ?
                `, [id],
                (erro) => {
                    if (erro) {
                        return reject('Não foi possível remover o livro!');
                    }
                    return resolve();
                }
            );
        });
    }

    buscaPorId(id) {

        return new Promise((resolve, reject) => {
            this._connection.query(
                `
                    SELECT *
                    FROM livros
                    WHERE id = ?
                `, [id],
                (erro, livro) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o livro!');
                    }

                    livro = livro && livro[0];

                    return resolve(livro);
                }
            );
        });
    }

    atualiza(livro) {
        return new Promise((resolve, reject) => {
            this._connection.query(`
                UPDATE livros SET
                titulo = ?,
                preco = ?,
                descricao = ?
                WHERE id = ?
            `, [
                    livro.titulo,
                    livro.preco,
                    livro.descricao,
                    livro.id
                ],
                erro => {
                    if (erro) {
                        return reject('Não foi possível atualizar o livro!');
                    }

                    resolve();
                });
        });
    }
}