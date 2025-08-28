'use strict';
const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const sequelize = require('@src/config/sequelizeConnection');
const models = {};
//loads all the models
fs.readdirSync(__dirname)
.filter(file => file !== 'index.js' && file.endsWith('.js'))
.forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    models[model.name] = model;
});
Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});
models.sequelize = sequelize;
module.exports = models;