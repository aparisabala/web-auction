const { Sequelize } = require('sequelize');
const database = require('@src/config/dbConfig');
const sequelize = new Sequelize(database[process.env.NODE_ENV]);
module.exports = sequelize;