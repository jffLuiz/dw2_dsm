const http = require('http');
const servidor = require('./config/aplicativo.js');
const conexao = require('./config/conexao.js');





server.get('/editoras', (req, res) => {
    res.send('Rota Editoras encontrada');
})

server.get('/livros', (req, res) => {
    res.send('Rota Livros encontrada');
})

http.createServer(servidor).listen(servidor.get('porta'), function(){
    console.log('\nServidor executando na porta ' + server.get('porta'));
})