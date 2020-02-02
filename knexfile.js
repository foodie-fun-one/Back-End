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
        host: 'ec2-23-21-91-183.compute-1.amazonaws.com',
        port: 5432,
        user: 'ejcaginugkqqxs',
        password: 'ef4eb21962b87a90a428d301dee909f311b8573b99a78eebcbcdd3409e8ecbb5',
        database: 'desot3npcl6man',
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