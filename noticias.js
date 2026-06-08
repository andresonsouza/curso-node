const http = require('http');

const server = http.createServer( function(req, res) {
    res.end("<html><body><h1>Portal de Noticias</h1><p>Noticia 1</p><p>Noticia 2</p><p>Noticia 3</p></body></html>");
});

server.listen(3000);