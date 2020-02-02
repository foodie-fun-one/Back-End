require('dotenv').config()

module.exports = {
    development: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
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
      connection: process.env.DATABASE_URL,
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
      connection: process.env.DATABASE_URL,
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