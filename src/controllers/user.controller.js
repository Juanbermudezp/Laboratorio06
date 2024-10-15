const { addNewUser, fetchAllUsers } = require('../services/user.service.js');

const addUserController = async (req, res) => {
    try {
        const { name, lastname, email } = req.body;
        const user = await addNewUser(name, lastname, email);
        res.render('home', { user });
    } catch (e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
};

const showAllUsers = async (req, res) => {
    try {
        const users = await fetchAllUsers();
        res.render('allUsers', { users });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};

const showForm = (req, res) => {
    res.render('form');
};

module.exports = {
    addUserController,
    showForm,
    showAllUsers
};
