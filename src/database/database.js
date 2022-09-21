import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
    'pry20220174',
    'm23at3xfvbbw0zuetaa6',
    'pscale_pw_SwejjM1B06porzLMpmzRcLFf1RcyMYocMNK1kRVjPlq',
    {
        host: 'us-east.connect.psdb.cloud',
        dialect: 'mysql',
        dialectOptions: {
            ssl: {
                rejectUnauthorized: true,        
            }
        }
    }
);