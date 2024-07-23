var express = require('express');
var app = express();

//CONFIGURANDO O SERVIDOR PARA USAR EJS

app.set('view engine' , 'ejs');

//PASSANDO O CAMINHO DA PASTA VIEWS

app.set('views' , 'src/views');

//MOSTRANDO A PAGINA INDEX.EJS

app.get('/' , function(require, response){
    response.render('index');
});
app.get('/adicionar' , function(require, response){
    response.render('adicionar');
});

//INICIANDO O SERVIDOR

app.listen(3003, function(){
    console.log('Servidor rodando na porta 3003');
});