require('dotenv').config();
const base = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    dialect: 'mysql',
    logging: false
};
module.exports = {
    development: { ...base },
    test: { ...base, database: `${process.env.DB_NAME}_test` },
    production: { ...base }
};