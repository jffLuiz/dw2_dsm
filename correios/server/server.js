const express = require('express');
const server = express();
const porta = 3011;
const Correios = require("node-correios");
const correio = new Correios()
const cors = require("cors")

server.use(cors())

server.listen(porta, () => console.log(`Servidor rodando na porta: ${porta}`));

server.get('/', (requisicao, resposta) => {
    console.log('Rota de CEP encontrada!!!');
    const {cep} = requisicao.query;
    console.log('>> ' + cep);

    correio.consultaCEP({cep: cep})
    .then(resultado => {
        resposta.send(resultado);
        console.log(resultado);
        console.log("Sucesso na consulta!!!");
    })
    .catch(error => {
        console.log("Ocorreu um Erro: " + error)
    })
})