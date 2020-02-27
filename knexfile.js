// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgres',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
   
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './db/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations',
    }
  
  }

};