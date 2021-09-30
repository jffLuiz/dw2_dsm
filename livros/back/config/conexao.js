const mysql = require ('mysql2');

const database = 'dadosweb212'

//instanciar objeto de acesso ao banco de dados
const conexao = mysql.createConnection({
    user: 'root',
    password: '1234',
    host: 'localhost',
    port: 3306
})

conexao.connect((err) => {
    if (err) {
        console.log('Erro ao conectar ao MySQL')
        return 
    }
    conexao.query('USE ' + database);
    console.log('\nConexão estabilizada com sucesso');
})

module.exports = conexao;