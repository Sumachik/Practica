const express = require('express');

const router = express.Router();

const mysqlConexion = require('../database');

router.get('/', (req,res) =>{
    mysqlConexion.query('SELECT *FROM Perros',(err,rows,fields)=>{
        if (!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});


router.get('/:id',(req,res)=>{
    const {id} = req.params;
    mysqlConexion.query('SELECT * FROM Perros WHERE idPerros=?',[id],(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    })
});


//agregar
router.post('/add',(req,res)=>{
    const {nombre, collar, dueño} =req.body;
    mysqlConexion.query('CALL SP_AgregarPerros(?,?,?)',[nombre,collar,dueño],(err,rows,fields)=>{
        if (!err){
            res.json({status: 'perrito agregado'});
        } else {
            console.log(err);
        }
    })
});

//editar
router.put('/Edit',(req,res)=>{
    const {id, nombre, collar, dueño} = req.body;
    mysqlConexion.query('CALL SP_EditarPerro(?,?,?,?)',[id,nombre,collar,dueño],(err,rows,fields)=>{
        if (!err){
            res.json({status: 'perrito editado'});
        } else {
            console.log(err);
        }
    })
});

//eliminar
router.delete('/delete/:id',(req,res)=>{
    const {id} = req.params;
    mysqlConexion.query('DELETE FROM perros WHERE idPerros=?',[id],(err,rows,fields)=>{
        if (!err){
            res.json({status: 'perrito eliminado'});
        } else {
            console.log(err);
        }
    })
})

module.exports = router;