const mysql = require('mysql');

const mysqlConexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'asd.456',
    database:'perros'
});

mysqlConexion.connect(function(err){
    if (err){
        console.log(err);
    } else {
        console.log('base de datos conectada');
    }
});


module.exports = mysqlConexion;