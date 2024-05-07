const express = require('express');

const app = express();


const home = require("./controllers/home");
const account = require("./controllers/account");




app.use('/home', home);
app.use('/', account);







app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080: http://localhost:8080');
});