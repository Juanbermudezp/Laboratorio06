const {addUserController, showForm, showAllUsers} = require('../controllers/user.controller.js');
const router = require('express').Router();

router.get('/', showForm);
router.post('/home', addUserController);
router.get('/allUsers', showAllUsers); 

module.exports = router;