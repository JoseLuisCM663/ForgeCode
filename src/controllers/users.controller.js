import User from "../models/users.js";
import bcrypt from 'bcryptjs';

const register = (req, res) => {
    res.render('register', 
    {
        title: 'Register',
        message: 'Register'
    });
}

const login = (req, res) => {
    res.render('login', 
    {
        title: 'Login',
        message: 'Login'
    });
}

const registerUser = async (req, res) => {
    try {
        const { name, email, birthdate, password, password2 } = req.body;

        // Validaciones iniciales

        if (password !== password2) {
            return res.status(400).send('<script>alert("Las contraseñas no coinciden."); window.location.href="/users/register";</script>');
        }

        // Verifica si el usuario ya existe
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).send('<script>alert("Este correo ya esta en uso."); window.location.href="/users/register";</script>');
        }

        // Hash de la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear el nuevo usuario
        const newUser = await User.create({
            Usuario: name,
            email,
            fecha_nacimiento: birthdate,
            contrasena: hashedPassword,
        });

        // Respuesta exitosa con alerta
        res.status(201).send('<script>alert("Usuario registrado exitosamente."); window.location.href="/users/login";</script>');

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al registrar el usuario." });
    }
};
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verificar si el usuario existe
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).send('<script>alert("Usuario no encontrado."); window.location.href="/users/login";</script>');
        }

        // Verificar la contraseña
        const validPassword = await bcrypt.compare(password, user.contrasena);
        if (!validPassword) {
            return res.status(400).send('<script>alert("Contraseña incorrecta."); window.location.href="/users/login";</script>');
        }

        // Guardar información del usuario en la sesión
        req.session.user = {
            id: user.id,
            email: user.email,
            name: user.name // Ajusta según los campos en tu modelo de usuario
        };

        // Redirigir al inicio
        res.status(200).send('<script>window.location.href="/";</script>');

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al iniciar sesión." });
    }
};

const logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al cerrar sesión');
        } else {
            res.redirect('/login');
        }
    });
};

export { register, login, registerUser, loginUser, logout };