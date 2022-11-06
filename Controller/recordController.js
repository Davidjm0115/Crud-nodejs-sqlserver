var config = require('../dbconfig');
const sql = require('mssql');
const Records = require('../Models/record');

//Mostrar
async function getRecords() {
    try {
        let pool = await sql.connect(config);
        let records = await pool.request()
        .execute("SP_MOSTRARRECORD");
        return records.recordset;
    }
    catch (error) {
        console.log(error);
    }
}
//Mostrar por id
async function getRecordsbyId(id) {
    try {
        let pool = await sql.connect(config);        
        let records = await pool.request()
        .input('ID', sql.Int,id)
        .execute('SP_MOSTRARRECORDXID')
        return records.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

//Insertar
async function post(Records) {
    try {
        let pool = await sql.connect(config);
        
        let insertRecords = await pool.request()
        .input('CODIGO', sql.NVarChar,Records.CODIGO)
        .input('PERIODO', sql.NVarChar,Records.PERIODO)
        .input('NOTA1', sql.Decimal,Records.NOTA1)
        .input('NOTA2', sql.Decimal,Records.NOTA2)
        .input('CODIGO_ESTUDIANTE', sql.VarChar,Records.CODIGO_ESTUDIANTE)
        .input('CODIGO_DOCENTE', sql.VarChar,Records.CODIGO_DOCENTE)
        .execute('SP_INSERTARRECORDXID');
         return insertRecords.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

//update
async function put(Records,id) {
    try {
        let pool = await sql.connect(config);
        
        let updateRecords = await pool.request()
        .input('ID', sql.Int,Records.ID)
        .input('CODIGO', sql.NVarChar,Records.CODIGO)
        .input('PERIODO', sql.NVarChar,Records.PERIODO)
        .input('NOTA1', sql.Decimal,Records.NOTA1)
        .input('NOTA2', sql.Decimal,Records.NOTA2)
        .input('CODIGO_ESTUDIANTE', sql.NVarChar,Records.CODIGO_ESTUDIANTE)
        .input('CODIGO_DOCENTE', sql.NVarChar,Records.CODIGO_DOCENTE)
        .query("UPDATE RECORD_ACADEMICO SET CODIGO = @CODIGO, PERIODO = @PERIODO, NOTA1 = @NOTA1, NOTA2 = @NOTA2 , CODIGO_ESTUDIANTE = @CODIGO_ESTUDIANTE, CODIGO_DOCENTE = @CODIGO_DOCENTE WHERE ID = @ID")
   
         return updateRecords.recordset;
    }
    catch (error) {
        console.log(error);
    }
}
//Eliminar

async function deleteXId(Records,id) {
    try {
        let pool = await sql.connect(config);
        
        let deleteProducts = await pool.request()
        .input('ID', sql.Int,Records.ID)
        .execute('SP_ElIMINARRECORDXID')
         return deleteProducts.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {getRecords: getRecords,
    getRecordsbyId: getRecordsbyId,
    post:post,
    put : put,
    deleteXId: deleteXId
    };