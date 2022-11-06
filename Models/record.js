class docentes {
    
    constructor(ID , CODIGO, FECHA, PERIODO,NOTA1,NOTA2,PROMEDIO,CODIGO_ESTUDIANTE,CODIGO_DOCENTE){
        this.ID = ID;
        this.CODIGO = CODIGO,
        this.FECHA = FECHA,
        this.PERIODO = PERIODO,
        this.NOTA1 = NOTA1,
        this.NOTA2 = NOTA2,
        this.PROMEDIO = PROMEDIO,
        this.CODIGO_ESTUDIANTE = CODIGO_ESTUDIANTE,
        this.CODIGO_DOCENTE = CODIGO_DOCENTE
    }
}
module.exports = docentes;
