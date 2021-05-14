const express = require('express');

const app = express();


//middlewares
app.use(express.json());

//rutas
app.use(require('./rutas/perros'));

//puerto 3000 del servidor
app.listen(3000, ()=>{
    console.log("servidor inicializado en el puerto 3000");
});