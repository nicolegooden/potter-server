// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/harry_potter',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }
};
