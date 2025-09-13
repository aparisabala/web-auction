import sequelize from '#src/config/sequelizeConnection';
import { Model, DataTypes } from 'sequelize';

class SkUserMessage extends Model {
  static associate(models) {
    // define associations here
  }
}

SkUserMessage.init(
  {
    sk_user_chat_console_id: DataTypes.INTEGER,
    sender_id: DataTypes.INTEGER,
    message: DataTypes.TEXT,
  },
  {
    sequelize,
    tableName: 'sk_user_chat_messages',
    modelName: 'SkUserMessage',
    underscored: true,
    timestamps: true,
  }
);

export default SkUserMessage;
