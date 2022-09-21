import app from './app.js';
import {sequelize} from './database/database.js'
import './models/init-models.js'

async function main(){
    try {
    await sequelize.sync();
    console.log("Prueba correcta");
    app.listen(4000);
    console.log("Servidor Conectado", 4000);
    } catch (error) {
        console.error("Error conectando a la base de datos: ", error);
    }
    
}
main();

