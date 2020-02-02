require('dotenv').config()

module.exports = {
    development: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      ssl: true,
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
      ssl: true,
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
      connection: {
        host: POSTGRES_PROD_HOST,
        port: POSTGRES_PROD_PORT,
        user: POSTGRES_PROD_USER,
        password: POSTGRES_PROD_PASSWORD,
        database: POSTGRES_PROD_DATABASE,
        ssl: true
      },
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