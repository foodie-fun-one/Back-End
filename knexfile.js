require('dotenv').config()

const localPg = {
  host: 'localhost',
  port: 5432,
  user: 'foodiefun_admin',
  password: 'foodieisfun',
  database: 'foodiefun'
};

const pgUser = process.env.PG_USER || `postgres`;
const pgDB = process.env.PG_DB || 'foodiefun';

const prodConnection = `postgres://${pgUser}localhost/${pgDB}`;


module.exports = {
    development: {
      client: 'pg',
      connection: localPg,
      migrations: {
        directory: './data/migrations'
      },
      seeds: {
        directory: './data/seeds/dev'
      },
      useNullAsDefault: true
    },
  
    test: {
      client: 'pg',
      connection: localPg,
      migrations: {
        directory: './data/migrations'
      },
      seeds: {
        directory: './data/seeds/dev'
      },
      useNullAsDefault: true
    },
  
    production: {
      client: 'pg',
      connection: prodConnection,
      migrations: {
        directory: './data/migrations'
      },
      seeds: {
        directory: './data/seeds/dev'
      },
      pool: {
        min: 2,
        max: 10,
      },
      useNullAsDefault: true
    }
  }