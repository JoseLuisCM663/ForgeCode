

const home = (req, res) => {
    const user = req.session?.user || {}; // Si no hay sesión, usa un objeto vacío
    res.render('home', 
    {
        ID: user.id || 'Invitado', // Si no hay ID, muestra 'Invitado'
        mail: user.email || 'Invitado', // Si no hay nombre, muestra 'Invitado'
        title: 'Home',
        message: 'Hello World'
    });
};

const desarrolladores = (req, res) => {
    const user = req.session?.user || {}; // Si no hay sesión, usa un objeto vacío

    res.render('desarrolladores', 
    {
        ID: user.id || 'Invitado', // Si no hay ID, muestra 'Invitado'
        mail: user.email || 'Invitado', // Si no hay nombre, muestra 'Invitado'
        title: 'Desarrolladores',
        message: 'Desarrolladores'
    });
};

const nosotros = (req, res) => {
    const user = req.session?.user || {}; // Si no hay sesión, usa un objeto vacío

    res.render('nosotros', 
    {
        ID: user.id || 'Invitado', // Si no hay ID, muestra 'Invitado'
        mail: user.email || 'Invitado', // Si no hay nombre, muestra 'Invitado'
        title: 'Nosotros',
        message: 'Nosotros'
    });
}

const industrias = (req, res) => {
    const user = req.session?.user || {}; // Si no hay sesión, usa un objeto vacío

    res.render('industrias', 
    {
        ID: user.id || 'Invitado', // Si no hay ID, muestra 'Invitado'
        mail: user.email || 'Invitado', // Si no hay nombre, muestra 'Invitado'
        title: 'Industrias',
        message: 'Industrias'
    });
}

export {home, desarrolladores, nosotros , industrias};
