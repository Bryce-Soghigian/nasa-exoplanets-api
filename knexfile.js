// Update with your config settings.
require('dotenv').config();
module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault: true,
    
    connection: {
      host: '127.0.0.1',
      port: '5555',
      user: 'postgres',
      password:process.env.PASS,
      database: 'ExoPlanet'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
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