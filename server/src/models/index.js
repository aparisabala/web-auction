import sequelize from '#src/config/sequelizeConnection';
import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';


const models = {};
const __dirname = path.resolve();
// Load all models dynamically
fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js' && file.endsWith('.js'))
  .forEach(async(file)=> {
    const modelPath = path.join(__dirname, file);
    const modelModule = await import(`file://${modelPath}`);
    const model = modelModule.default(sequelize, DataTypes);
    models[model.name] = model;
  });


Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;
export default models;
