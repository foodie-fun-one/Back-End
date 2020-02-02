require('dotenv').config()


const herokuPg = {
  host: 'ec2-23-21-91-183.compute-1.amazonaws.com',
  port: 5432,
  user: 'ejcaginugkqqxs',
  password: 'ef4eb21962b87a90a428d301dee909f311b8573b99a78eebcbcdd3409e8ecbb5',
  database: 'desot3npcl6man',
  ssl: true
};

const prodConnection = `postgres://ejcaginugkqqxs:ef4eb21962b87a90a428d301dee909f311b8573b99a78eebcbcdd3409e8ecbb5@ec2-23-21-91-183.compute-1.amazonaws.com:5432/desot3npcl6man`;


module.exports = {
    development: {
      client: 'pg',
      connection: herokuPg,
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
      connection: herokuPg,
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