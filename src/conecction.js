import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config({path:".env"}); // Inicializar dotenv para usar las variables de entorno

// Configurar la conexión a la base de datos
const db = new Sequelize(
    process.env.DB_NAME,     // Nombre de la base de datos
    process.env.DB_USER,     // Usuario
    process.env.DB_PASSWORD, // Contraseña
    {
        host: process.env.DB_HOST, // Host
        port: process.env.DB_PORT, // Puerto
        dialect: "mysql",          // Dialecto
        logging: console.log,            // Opcional: desactiva el logging de Sequelize
    }
);

export default db;
