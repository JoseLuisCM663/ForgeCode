const register = (req, res) => {
    res.render('register', 
    {
        title: 'Register',
        message: 'Register'
    });
}

export default register;