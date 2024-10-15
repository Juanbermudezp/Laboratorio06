const { save, User, getAllUsers } = require('../models/user.model.js');

const addNewUser = async (name, lastname, email) => {
    const newUser = new User(name, lastname, email);
    return await save(newUser); 
};

const fetchAllUsers = async () => {
    return await getAllUsers(); 
};

module.exports = {
    addNewUser,
    fetchAllUsers
};
