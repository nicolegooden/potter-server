module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/harry_potter',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  }
};
