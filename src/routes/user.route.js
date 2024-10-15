const { addUserController, showForm } = require('../controllers/user.controller.js')
const router = require('express').Router();
router.get('/', showForm);
router.post('/home', addUserController)
module.exports = router;

