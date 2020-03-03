module.exports = {
    development: {
        use_env_variable: 'mysql://root:password@127.0.0.1:3306/db_usermanagement',
        database: "db_usermanagement",
        username: 'root',
        password: "password",
        timezone: '+05:00',
        config: {
            host: 'localhost',
            dialect: 'mysql',
            operatorsAliases: false,
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
            define: {
                underscored: false,
                freezeTableName: false,
                charset: 'utf8',
                dialectOptions: {
                    collate: 'utf8_general_ci'
                },
                timestamps: false
            },
            timezone: '+05:00'
        }
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: 'mysql',
        use_env_variable: 'DATABASE_URL',
        timezone: 'America/Lima'
    }
};