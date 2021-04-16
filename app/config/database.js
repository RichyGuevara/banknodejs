const knex = require('knex');

module.exports = knex({
    client: 'pg', //indica que se usara postgres como motor de BD
    connection: 'postgres://postgres:richy@localhost:5432/mibanco', //cadena de conexion
    pool: { min: 1, max: 2 },
    acquireConnectionTimeout: 5000,
});