import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
    'pry20220174',
    'root',
    'password',
    {
    host : '127.0.0.1',
    dialect : 'mysql',
    }
);