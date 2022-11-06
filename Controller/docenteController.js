var config = require('../dbconfig');
const sql = require('mssql');
const Docentes = require('../Models/docentes')

//Mostrar
async function getDocentes() {
    try {
        let pool = await sql.connect(config);
        let docentes = await pool.request()
        .execute("SP_MOSTRARDOCENTES");
        return docentes.recordset;
    }
    catch (error) {
        console.log(error);
    }
}
//Mostrar por ID
async function getDocentesbyId(id) {
    try {
        let pool = await sql.connect(config);        
        let docentes = await pool.request()
        .input('ID', sql.Int,id)
        .execute('SP_MOSTRARDOCENTESXID')
        return docentes.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

// Insertar
async function post(Docentes) {
    try {
        let pool = await sql.connect(config);
        
        let insertDocentes = await pool.request()
        .input('IDENTIFICACION', sql.NVarChar,Docentes.IDENTIFICACION)
        .input('NOMBRES', sql.NVarChar,Docentes.NOMBRES)
        .input('APELLIDOS', sql.NVarChar,Docentes.APELLIDOS)
        .input('CODIGO_ASIGNATURA', sql.NVarChar,Docentes.CODIGO_ASIGNATURA)
        .execute('SP_INSERTARDOCENTESXID');
         return insertDocentes.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

//update
async function put(Docentes,id) {
    try {
        let pool = await sql.connect(config);
        
        let updateDocentes = await pool.request()
        .input('ID', sql.Int,Docentes.ID)
        .input('IDENTIFICACION', sql.Int,Docentes.IDENTIFICACION)
        .input('NOMBRES', sql.NVarChar,Docentes.NOMBRES)
        .input('APELLIDOS', sql.NVarChar, Docentes.APELLIDOS)
        .input('CODIGO_ASIGNATURA', sql.NVarChar,Docentes.CODIGO_ASIGNATURA)
        .query("UPDATE DOCENTES SET IDENTIFICACION = @IDENTIFICACION, NOMBRES = @NOMBRES, APELLIDOS = @APELLIDOS, CODIGO_ASIGNATURA = @CODIGO_ASIGNATURA WHERE ID = @ID")
         return updateDocentes.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

//Eliminar

async function deleteXId(Docentes,id) {
    try {
        let pool = await sql.connect(config);
        
        let deleteDocentes = await pool.request()
        .input('ID', sql.Int,Docentes.ID)
        .execute('SP_ELIMINARDOCENTEXID')
         return deleteDocentes.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {getDocentes: getDocentes,
    getDocentesbyId:getDocentesbyId,
    post:post,
    put : put,
    deleteXId: deleteXId
    };