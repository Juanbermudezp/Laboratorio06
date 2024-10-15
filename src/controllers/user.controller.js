const { addNewUser } = require('../services/user.service.js');
const addUserController = (req, res) => {
    try {
        const { name, lastname, email } = req.body;
        const user = addNewUser(name, lastname, email)
        res.render('home.pug', { user });
    } catch (e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
}
const showForm = (req, res) => {
    res.render('form');
}
module.exports = {
    addUserController,
    showForm
}