// Inicial o servidor
const express = require('express');
const app = express();
// =-=-=-=-=-=-=-=-=-=-=-=

// Utilizar o módulo de Path para construir diretórios
const path = require('path');
// =-=-=-=-=-=-=-=-=-=-=-=

// Configurar os diretórios lógicos da aplicação
app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
//app.use('/js', express.static(path.join(__dirname, './models')));
// =-=-=-=-=-=-=-=-=-=-=-=

// Configurar o servidor para utilizar HandleBars e o Body-Parser
const handlebars = require('express-handlebars');
const bodyparser = require('body-parser');
// =-=-=-=-=-=-=-=-=-=-=-=

// Configurar o Body-Parser
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());
// =-=-=-=-=-=-=-=-=-=-=-=

// Configurar o Handlebars
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// =-=-=-=-=-=-=-=-=-=-=-=

//ROTAS

app.get("/register", function (request, response) {
    response.render("cadastro");
});

app.get("/login", function (request, response) {
    response.render("login");
});

app.get("/person", function (request, response) {
    response.render("person");
});

app.get("/user", function (request, response) {
    response.render("usuario");
});

app.get("/smallgroup", function (request, response) {
    response.render("pgs");
});

app.get("/home", function (request, response) {
    response.render("home");
});

// Inicializar o servidor
app.listen(8083, function () {
    console.log("Servidor rodando na porta 8083!");
});
// =-=-=-=-=-=-=-=-=-=-=-=
