const controllers = require('../models/autoresModels.js');

module.exports = {
    autoresMenu, 
    autoresGetAll,
}

function autoresMenu(req, res){
    res.send('Rota Menu de Autores encontrada');
    console.log('Rota Menu de Autores encontrada')
}

function autoresGetAll(req, res){
    console.log('Acessando Listagem de Autores { M O D E L }')
    controllers.getAllAutores(function(err, resposta){
        console.log('Retornando de { M O D E L }')
        if(err){
            throw err;
        } else {
            res.json(resposta)
        }
    })
}


