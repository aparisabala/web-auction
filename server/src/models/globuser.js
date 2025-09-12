import sequelize from '#src/config/sequelizeConnection';
import { Model, DataTypes } from 'sequelize';

class Globuser extends Model {
  static associate(models) {
    // define associations here
  }
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

export default Globuser;
