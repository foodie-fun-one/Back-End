require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.PGHOST,
      port: process.env.PGPORT ,
      database: process.env.PGDATABASE,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      ssl: process.env.PGSSL
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds/dev"
    },
    useNullAsDefault: true
  },

  testing: {
    client: "pg",
    connection: {
      host: process.env.PGHOST,
      port: process.env.PGPORT,
      database: process.env.PGDATABASE,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      ssl: process.env.PGSSL
    },

    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds/dev"
    },
    useNullAsDefault: true
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL + `?ssl=true`,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds/dev"
    },
    pool: {
      min: 2,
      max: 10
    },
    useNullAsDefault: true
  }
};


