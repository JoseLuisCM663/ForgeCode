import Buzon from "../models/buzon.js";

const contacto = (req, res) => {
    const user = req.session?.user || {}; // Si no hay sesión, usa un objeto vacío
    res.render('contacto', 
    {
        ID: user.id || 'Invitado', // Si no hay ID, muestra 'Invitado'
        mail: user.email || 'Invitado', // Si no hay nombre, muestra 'Invitado'
        title: 'Contacto',
        message: 'Contacto'
    });
}

const mensaje = async (req, res) => {
    try {
        const { nombre, apellidos, telefono, mensaje, id_usuario } = req.body; // Asegúrate de incluir id_usuario

        // Crear el nuevo mensaje
        const newMessage = await Buzon.create({
            nombre,
            apellidos,
            telefono,
            mensaje,
            id_usuario, // Inclúyelo si tu modelo lo requiere
        });

        // Respuesta de éxito
        res.status(201).send('<script>alert("Mensaje enviado exitosamente."); window.location.href="/buzon/contacto";</script>');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al enviar el mensaje." });
    }
};

const buzonAll = async (req, res) => {
    const user = req.session?.user || {}; // Si no hay sesión, usa un objeto vacío

    try {
        const mensajes = await Buzon.findAll(); // Obtener todos los mensajes de la base de datos
        res.render('buzon', { 
            mensajes,
            ID: user.id || 'Invitado', // Si no hay ID, muestra 'Invitado'
            mail: user.email || 'Invitado' // Si no hay email, muestra 'Invitado'
        }); // Renderizar la vista y pasar los datos
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los mensajes');
    }
};


export {contacto, mensaje, buzonAll};