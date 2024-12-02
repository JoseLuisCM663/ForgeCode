

const home = (req, res) => {
    res.render('home', 
    {
        title: 'Home',
        message: 'Hello World'
    });
}

export default home;