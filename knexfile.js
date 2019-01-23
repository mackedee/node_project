module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/mackedee',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  }
}
