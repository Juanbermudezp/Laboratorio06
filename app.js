const express = require('express');
const userRoute = require('../Laboratorio06/src/routes/user.route.js');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.urlencoded({ extended: true }));
app.use(userRoute);
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});