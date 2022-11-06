var config = require('../dbconfig');
const sql = require('mssql');
const Asignaturas = require('../Models/asignaturas')

//Mostrar
async function getAsignaturas() {
    try {
        let pool = await sql.connect(config);
        let asignaturas = await pool.request()
        .execute("SP_MOSTRARASIGNATURAS");
        return asignaturas.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

//Mostrar por ID
async function getAsignaturasbyId(id) {
    try {
        let pool = await sql.connect(config);        
        let asignaturas = await pool.request()
        .input('ID', sql.Int,id)
        .execute('SP_MOSTRARASIGNATURASXID')
        return asignaturas.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

//Insertar
async function post(Asignaturas) {
    try {
        let pool = await sql.connect(config);
        
        let insertAsignaturas = await pool.request()
        .input('CODIGO', sql.VarChar,Asignaturas.CODIGO)
        .input('NOMBRE', sql.VarChar,Asignaturas.NOMBRE)
        .input('CREDITOS', sql.TinyInt,Asignaturas.CREDITOS)
        .execute('SP_INSERTARASIGNATURASXID');
         return insertAsignaturas.recordset;
    }
    
    catch (error) {
        console.log(error);
    }
}

//update
async function put(Asignaturas,id) {
    try {
        let pool = await sql.connect(config);
        
        let updateAsignaturas = await pool.request()
        .input('ID', sql.Int,Asignaturas.ID)
        .input('CODIGO', sql.VarChar,Asignaturas.CODIGO)
        .input('NOMBRE', sql.VarChar,Asignaturas.NOMBRE)
        .input('CREDITOS', sql.TinyInt,Asignaturas.CREDITOS)
        .query("UPDATE ASIGNATURAS SET CODIGO = @CODIGO, NOMBRE = @NOMBRE, CREDITOS = @CREDITOS WHERE ID = @ID")
         return updateAsignaturas.recordset;
    }
    catch (error) {
        console.log(error);
    }
}
//Eliminar

async function deleteXId(Asignaturas,id) {
    try {
        let pool = await sql.connect(config);
        
        let deleteAsignaturas = await pool.request()
        .input('ID', sql.Int,Asignaturas.ID)
        .execute('SP_ELIMINARASIGNATURASXID')
         return deleteAsignaturas.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {getAsignaturas: getAsignaturas,
    getAsignaturasbyId: getAsignaturasbyId,
    post:post,
    put : put,
    deleteXId: deleteXId
    };