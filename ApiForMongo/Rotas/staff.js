const route = require('color-convert/route');
const { response, request } = require('express');
const express = require('express');
const router = express.Router();
const Staff = require('../models/staff');
const ObjectId = require('mongodb').ObjectId; 


// ROTAS
    //Nota: qualquer uma destas rotas é apenas o sufixo de localhost:xx/posts
    //pq o resto está definido em StaffRoute no folder app.js
  
// Retorna todos os staffs
router.get('/GetStaff', async (request, response) => { 
    try{
        const staffs = await Staff.find();
        response.json(staffs);
    } catch(err)
    {
        response.json({message:err});
    }
});

// Retorna um staff com um nome especifico
router.get('/GetStaff/Name/:staff_name', async(request, response) => {
    try {
        const staff = await Staff.find({staff_name: request.params.staff_name}).exec();

        response.json(staff);
    } catch(err) {
        response.json({message: err});
    }
});

// Retorna um staff com um Id especifico
router.get('/GetStaff/Id/:staffId', async(request, response) => {
    try {
        const staff = await Staff.findById(request.params.staffId);

        response.json(staff);
    } catch(err) {
        response.json({message: err});
    }
});

// É preciso instalar um pacote chamado body parser 
// Serve para converter os dados do request
// Cria um staff
router.post('/CreateStaff', async (request, response) => {

    const staff = new Staff({ // Criar um objeto para enviar
        staff_name: request.body.staff_name,
        email: request.body.email,
        phone: request.body.phone,
        active: request.body.active,
        store_key: request.body.store_key
    });
        try {
            const savedStaff = await staff.save(); // Guardar na BD
            response.json(savedStaff); 
        } catch (err) {
            response.json({message: err}); 
        }
});


module.exports = router;