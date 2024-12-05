import express from 'express';
import dotenv from 'dotenv';
import router from './routes/home.routes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import usersrouter from './routes/users.routes.js';
import db from './conecction.js';
import User from './models/users.js';

dotenv.config({path:".env"}); // Inicializar dotenv para usar las variables de entorno

// Obtener __dirname en ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configurar el motor de plantillas EJS
app.set("view engine", "ejs");
app.set("views", "src/views");

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Conexión a la base de datos
// Conexión a la base de datos
try {
    await db.authenticate();
    console.log("Conexión exitosa.");

    // Sincronizar la base de datos con los modelos
    await db.sync({ alter: true }); // Crea o actualiza tablas según los modelos
    console.log("Base de datos sincronizada.");
} catch (error) {
    console.error("Error en la conexión:", error);
}



// Configuración de rutas
app.use('/', router); // Ruta principal
app.use('/users', usersrouter); // Ruta para usuarios

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
