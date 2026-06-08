const http = require('node:http');

const server = http.createServer(function (req, res) {
    
    const categoria = req.url;

    if (categoria == '/tecnologia') {
        res.end("<html><body><h1>Noticias de Tecnologia</h1><p>Noticia 1</p><p>Noticia 2</p><p>Noticia 3</p></body></html>");
    } 
    else if (categoria == "/moda") {
        res.end("<html><body><h1>Noticias de Moda</h1><p>Noticia 1</p><p>Noticia 2</p><p>Noticia 3</p></body></html>");
    } 
    else if (categoria == "/esportes") {
        res.end("<html><body><h1>Noticias de Esportes</h1><p>Noticia 1</p><p>Noticia 2</p><p>Noticia 3</p></body></html>");
    }
    else {
        res.end("<html><body><h1>Portal de Noticias</h1><p>Noticia 1</p><p>Noticia 2</p><p>Noticia 3</p></body></html>");
    }

}).listen(3000);
