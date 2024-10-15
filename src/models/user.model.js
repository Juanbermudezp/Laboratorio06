let users = []; 

class User {
    constructor(name, lastname, email) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
    }
}

const save = async (user) => {
    users.push(user); 
    return user;
};

const getAllUsers = async () => {
    return users; 
};

module.exports = {
    User,
    save,
    getAllUsers
};
