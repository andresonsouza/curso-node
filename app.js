const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send("<html><body><h1>PORTAL DE NOTÍCIAS</h1><p>Noticia 1</p><p>Noticia 2</p><p>Noticia 3</p></body></html>");
});

app.get('/tecnologia', function(req, res) {
    res.send("<html><body><h1>NOTÍCIAS DE TECNOLOGIA</h1><p>Noticia 1</p><p>Noticia 2</p><p>Noticia 3</p></body></html>");
});

app.get('/moda', function(req, res) {
    res.send("<html><body><h1>NOTÍCIAS DE MODA</h1><p>Noticia 1</p><p>Noticia 2</p><p>Noticia 3</p></body></html>");
});

app.get('/esportes', function(req, res) {
    res.send("<html><body><h1>NOTÍCIAS DE ESPORTES</h1><p>Noticia 1</p><p>Noticia 2</p><p>Noticia 3</p></body></html>");
});

app.listen(3000, function() {
    console.log("Servidor rodando na porta 3000");
});