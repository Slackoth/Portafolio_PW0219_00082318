const register = require('../models/Register');

const insert = (request, response)=>{
    let registerStudent = new register(request.body);
    registerStudent.save((error)=>{
        if(error){
            return response.status(500).json({
                'message': 'Something on insert went wrong...'
            }); //500 Simboliza error de servidor
        }
        response.status(200).json({
            'message': 'Request insert successful'
        }); //200 Simboliza peticion exitosa
    })
};

const update = (request, response)=>{
    let registerStudent = request.body;
    if(!registerStudent._id) {
        return response.status(400).json({
            'message': 'Field id is obligatory!'
        });
    }
    registerStudent.update({'_id': registerStudent._id}, registerStudent)
    .then(value=>{
        response.status(200).json({
            'message': 'Request update successful'
        });
    })
    .catch(error=>{
        response.status(500).jason({
            'message': 'Something on update went wrong...'
        });
    });
}

const deleteById = (request, response)=>{
    let registerStudent = request.body;
    if(!registerStudent._id) {
        return response.status(400).json({
            'message': 'Field id is obligatory!'
        });
    }
    registerStudent.deleteOne({'_id': registerStudent._id}, registerStudent)
    .then(value=>{
        response.status(200).json({
            'message': 'Request delete successful'
        });
    })
    .catch(error=>{
        response.status(500).jason({
            'message': 'Something on delete went wrong...'
        });
    });
}

const getAll = (request, response)=>{
    register.find((error, registers)=>{
        if(error){
            return response.status(500).json({
                'message': 'Something on select all went wrong...'
            }); //500 Simboliza error de servidor
        }
        if (registers) {
            response.status(200).json(registers);
        }
        else{
            response.status(404).json({
                'message': 'No registers were found...'
            })
            //404 Simboliza que no se encontraron datos
        }
    })
}

const getOneById = (request, response)=>{
    let id = request.params._id;
    register.findById(id, (error, registers)=>{
        if(error){
            return response.status(500).json({
                'message': 'Something on select one went wrong...'
            }); //500 Simboliza error de servidor
        }
        if (registers) {
            response.status(200).json(registers);
        }
        else{
            response.status(404).json({
                'message': 'No register was found...'
            })
            //404 Simboliza que no se encontraron datos
        }
    })
}

module.exports = {
    insert,
    update,
    deleteById,
    getAll,
    getOneById
}