const controllers = require('../models/indexModels.js');

module.exports = {
    index, 
}

function index(req, res){
    res.send('Rota Raiz encontrada');
    console.log('Rota Raiz encontrada')
}
