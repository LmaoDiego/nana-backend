import Sequelize from 'sequelize'
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs'

DB_HOST=localhost us-east.connect.psdb.cloud
DB_NAME=pry20220174
DB_USER=root m23at3xfvbbw0zuetaa6
DB_PASSWORD=password pscale_pw_SwejjM1B06porzLMpmzRcLFf1RcyMYocMNK1kRVjPlq


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const sequelize = new Sequelize(
    'pry20220174',
    'm23at3xfvbbw0zuetaa6',
    'pscale_pw_SwejjM1B06porzLMpmzRcLFf1RcyMYocMNK1kRVjPlq',
    {
    host : 'us-east.connect.psdb.cloud',
    dialect : 'mysql',
    ssl={"rejectUnauthorized":true}
    }
);