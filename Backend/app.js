//requiriendo dependencias 
const express = require('express');
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const http = require('http')
const server = http.createServer(express)



//instancia de express
const app = express()


const PORT = process.env.PORT || 3050

// Cargar ficheros rutas
var usuario_routes = require('./routes/RUsuario');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});




// Añadir perfijos a rutas / cargar rutas
app.use('/api', usuario_routes);



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

