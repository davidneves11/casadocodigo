class UsuarioDao {

    constructor(connection) {
        this._connection = connection;
    }

    buscaPorEmail(email) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                `
                    SELECT *
                    FROM usuarios
                    WHERE email = ?
                `, [email],
                (erro, usuario) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o usuário!');
                    }

                    return resolve(usuario[0]);
                }
            )
        });
    }
}

module.exports = UsuarioDao;