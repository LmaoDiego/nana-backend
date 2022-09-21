import Sequelize from 'sequelize'
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const sequelize = new Sequelize(
    'pry20220174',
    '7nk004wtj89n31e3lo48',
    'pscale_pw_quoMbwaq0hPMtpZLDdUoj29iEuUgxJJwXFuyul48ZPW',
    {
    host : 'us-east.connect.psdb.cloud',
    dialect : 'mysql',
    ssl: {
        cert: fs.readFileSync(__dirname + '/etc/pki/tls/certs/ca-bundle.crt'),
    }
    }
);