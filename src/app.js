import express from 'express';
import dotenv from 'dotenv';
import router from './routes/home.routes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import usersrouter from './routes/users.routes.js';
import db from './conecction.js';

dotenv.config();

// Obtener __dirname en ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configura el motor de plantillas utilizado en este caso es el EJS
app.set("view engine", "ejs");
app.set("views", "src/views");

// Configura el middleware para servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);   
});

// conexion a base de datos
db.authenticate()
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.log('Error: ' + err);
    });

app.use('/', router);
app.use('/users', usersrouter);
