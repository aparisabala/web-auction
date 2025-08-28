'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Globuser extends Model {
    static associate(models) {}
  }

  Globuser.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
      extension: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: 'globusers',
      modelName: 'Globuser',
      underscored: true, 
      timestamps: true,    
    }
  );

  return Globuser;
};
