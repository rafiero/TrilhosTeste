const sequelize = require('sequelize');
const connection = new sequelize('nome do banco', 'user', 'senha',{
    host: 'onde vai ser o servidor',
    dialect: 'mysql'
});

module.exports = connection;

//se der um erro oque pode concertar é
//ALTER USER 'root'@'localhost'IDENTIFIED WITH mysql_native-password BY '123456' 
//123456 é a senha do root do mysql
