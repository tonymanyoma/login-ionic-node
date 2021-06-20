var mysql = require('mysql');

var connection_db = mysql.createConnection({
   
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'maps',
   port: 3306
   
});

connection_db.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta a Maps');
   }
});


module.exports = connection_db;