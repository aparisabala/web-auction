import Sequelize from 'sequelize';
import dbConfig from '#src/config/dbConfig';
const sequelize = new Sequelize(dbConfig[process.env.NODE_ENV]);
export default sequelize;
