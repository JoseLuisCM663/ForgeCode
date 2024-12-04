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
export { register, login };