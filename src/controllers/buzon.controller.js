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

export {contacto};