var config = require('../dbconfig');
const sql = require('mssql');
const Estudiantes = require('../Models/estudiantes');

//Mostrar
async function getEstuadiantes() {
    try {
        let pool = await sql.connect(config);
        let Estuadiantes = await pool.request()
        .execute("SP_MOSTRARESTUDIANTES");
        return Estuadiantes.recordset;
    }
    catch (error) {
        console.log(error);
    }
}
//Mostrar por id
async function getEstudiantesbyId(id) {
    try {
        let pool = await sql.connect(config);        
        let Estuadiantes = await pool.request()
        .input('ID', sql.Int,id)
        .execute('SP_MOSTRARESTUDIANTESXID')
        return Estuadiantes.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

//Insertar
async function post(Estudiantes) {
    try {
        let pool = await sql.connect(config);
        
        let insertEstuadiantes = await pool.request()
        .input('IDENTIFICACION', sql.NVarChar,Estudiantes.IDENTIFICACION)
        .input('NOMBRES', sql.NVarChar,Estudiantes.NOMBRES)
        .input('APELLIDOS', sql.NVarChar,Estudiantes.APELLIDOS)
        .input('SEMESTRE', sql.NVarChar,Estudiantes.SEMESTRE)
        .input('CARRERA', sql.NVarChar,Estudiantes.CARRERA)
        .input('CODIGO_ASIGNATURA', sql.NVarChar,Estudiantes.CODIGO_ASIGNATURA)
        .execute('SP_INSERTARESTUDIANTESXID');
         return insertEstuadiantes.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

//update
async function put(Estudiantes,id) {
    try {
        let pool = await sql.connect(config);
        
        let updateEstudiantes = await pool.request()
        .input('ID', sql.Int,Estudiantes.ID)
        .input('IDENTIFICACION', sql.NVarChar,Estudiantes.IDENTIFICACION)
        .input('NOMBRES', sql.NVarChar,Estudiantes.NOMBRES)
        .input('APELLIDOS', sql.NVarChar,Estudiantes.APELLIDOS)
        .input('SEMESTRE', sql.NVarChar,Estudiantes.SEMESTRE)
        .input('CARRERA', sql.NVarChar,Estudiantes.CARRERA)
        .input('CODIGO_ASIGNATURA', sql.NVarChar,Estudiantes.CODIGO_ASIGNATURA)
        .query("UPDATE ESTUDIANTES SET IDENTIFICACION = @IDENTIFICACION, NOMBRES = @NOMBRES, APELLIDOS = @APELLIDOS, SEMESTRE = @SEMESTRE , CARRERA = @CARRERA , CODIGO_ASIGNATURA = @CODIGO_ASIGNATURA WHERE ID = @ID")
         return updateEstudiantes.recordset;
    }
    catch (error) {
        console.log(error);
    }
}
//Eliminar

async function deleteXId(Estudiantes,id) {
    try {
        let pool = await sql.connect(config);
        
        let deleteEstuadiantes = await pool.request()
        .input('ID', sql.Int,Estudiantes.ID)
        .execute('SP_ElIMINARESTUDIANTESXID')
         return deleteEstuadiantes.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {getEstuadiantes: getEstuadiantes,
    getEstudiantesbyId: getEstudiantesbyId,
    post:post,
    put : put,
    deleteXId: deleteXId
    };