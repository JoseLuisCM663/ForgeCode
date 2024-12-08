const contacto = (req, res) => {
    res.render('contacto', 
    {
        title: 'Contacto',
        message: 'Contacto'
    });
}

export {contacto};