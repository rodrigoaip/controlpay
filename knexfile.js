// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'controlpay',
      user:     'rodrigo',
      password: '963852'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory : './src/database/migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.PG_HOST || 'ec2-3-213-102-175.compute-1.amazonaws.com',
      port: process.env.PG_PORT ||  '5432',
      database:process.env.PG_DB ||'d6hn2sdg2ee0r0',
      user: process.env.PG_USER || 'kwbvejtdouxquu',
      password:  process.env.PG_PASSWORD || '9a920c8cfec3e27f5f21481fbec96591e0bc63f7400e34910d96b31623fce139'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory : './src/database/migrations'
    }
  }

};
