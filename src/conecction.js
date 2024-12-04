import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config({path: '.env'});

const db= new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.BD_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect:"mysql"
});

export default db;