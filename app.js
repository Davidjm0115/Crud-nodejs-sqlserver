var asignaturaController = require('./Controller/asignaturaController');
var docenteController = require('./Controller/docenteController');
var estudianteController = require('./Controller/estudianteController');
var recordController = require('./Controller/recordController');
var asignaturas = require('./Models/asignaturas');
var docentes = require('./Models/docentes');
var estudiantes = require('./Models/estudiantes');
var record= require('./Models/record');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

var port = process.env.port || 8090;
app.listen(port);
console.log('running in the port '+ port);

router.use((request,response,next) =>{
console.log('Welcome, Time:', Date.now());
next();
});

router.route('/asignaturas').get((request, response)=>{
    asignaturaController.getAsignaturas().then(result =>{
        response.json(result);
        console.log(result)
    })
})

router.route('/asignaturas/:id').get((request, response)=>{
    asignaturaController.getAsignaturasbyId(request.params.id).then(result =>{
        response.json(result);
        console.log(result)
    })
})

router.route('/asignaturas').post((request, response)=>{
    let order = {...request.body}
    asignaturaController.post(order).then(result =>{
        response.status(201).json(result);        
        console.log(result)
    })
})

router.route('/edit/:id').put((request, response)=>{
    let order = {...request.body}
    asignaturaController.put(order,request.params.id).then(result =>{
       response.json(result)     
        console.log(result)
    })
})

router.route('/delete/:id').delete((request, response)=>{
   let order = {...request.body}
   asignaturaController.deleteXId(order,request.params.id).then(result =>{
       response.json(result)     
       console.log('Eliminado!!!')
    })
})

// ----------------------------------Docentes-----------------------------------------------//

router.route('/docentes').get((request, response)=>{
    docenteController.getDocentes().then(result =>{
        response.json(result);
        console.log(result)
    })
})

router.route('/docentes/:id').get((request, response)=>{
    docenteController.getDocentesbyId(request.params.id).then(result =>{
        response.json(result);
        console.log(result)
    })
})

router.route('/docentes').post((request, response)=>{
    let order = {...request.body}
    docenteController.post(order).then(result =>{
        response.status(201).json(result);        
        console.log(result)
    })
})

router.route('/editdocentes/:id').put((request, response)=>{
    let order = {...request.body}
    docenteController.put(order,request.params.id).then(result =>{
       response.json(result)     
        console.log(result)
    })
})

router.route('/deletedocentes/:id').delete((request, response)=>{
   let order = {...request.body}
   docenteController.deleteXId(order,request.params.id).then(result =>{
       response.json(result)     
       console.log('Eliminado!!!')
    })
})


// ----------------------------------Estudiantes-----------------------------------------------//

router.route('/estudiantes').get((request, response)=>{
    estudianteController.getEstuadiantes().then(result =>{
        response.json(result);
        console.log(result)
    })
})

router.route('/estudiantes/:id').get((request, response)=>{
    estudianteController.getEstudiantesbyId(request.params.id).then(result =>{
        response.json(result);
        console.log(result)
    })
})

router.route('/estudiantes').post((request, response)=>{
    let order = {...request.body}
    estudianteController.post(order).then(result =>{
        response.status(201).json(result);        
        console.log(result)
    })
})

router.route('/editestudiantes/:id').put((request, response)=>{
    let order = {...request.body}
    estudianteController.put(order,request.params.id).then(result =>{
       response.json(result)     
        console.log(result)
    })
})

router.route('/deleteestudiantes/:id').delete((request, response)=>{
   let order = {...request.body}
   estudianteController.deleteXId(order,request.params.id).then(result =>{
       response.json(result)     
       console.log('Eliminado!!!')
    })
})

// ----------------------------------Records-----------------------------------------------//

router.route('/records').get((request, response)=>{
    recordController.getRecords().then(result =>{
        response.json(result);
        console.log(result)
    })
})

router.route('/records/:id').get((request, response)=>{
    recordController.getRecordsbyId(request.params.id).then(result =>{
        response.json(result);
        console.log(result)
    })
})

router.route('/records').post((request, response)=>{
    let order = {...request.body}
    recordController.post(order).then(result =>{
        response.status(201).json(result);        
        console.log(result)
    })
})

router.route('/editrecords/:id').put((request, response)=>{
    let order = {...request.body}
    recordController.put(order,request.params.id).then(result =>{
       response.json(result)     
        console.log(result)
    })
})

router.route('/deleterecords/:id').delete((request, response)=>{
   let order = {...request.body}
   recordController.deleteXId(order,request.params.id).then(result =>{
       response.json(result)     
       console.log('Eliminado!!!')
    })
})