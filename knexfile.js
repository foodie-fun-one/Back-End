require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    version: '1.0',
    connection: {
      host : '127.0.0.1',
      user : 'your_database_user',
      password : 'your_database_password',
      database : 'myapp_test'
  }},
  testing: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'your_database_user',
      password : 'your_database_password',
      database : 'myapp_test'
  },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};