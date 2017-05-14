var connection = require('config').db

if (process.env.CI) {
  connection.user = process.env.MYSQL_USER
  connection.password = process.env.MYSQL_PASSWORD
}

function getConfig () {
  return {
    client: 'mysql',
    connection: connection,
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}

module.exports = {
  development: getConfig(),
  test: getConfig(),
  staging: getConfig(),
  production: getConfig()
}
