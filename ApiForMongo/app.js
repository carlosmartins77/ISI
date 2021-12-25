const express = require('express'); // Para usar o pacote express neste ficheiro
const app = express(); // Executar o pacote
const mongoose = require('mongoose'); // Pacote para aceder ao MongoDB
mongoose.pluralize(null); // Sem isto, o mongoose acrescenta um s ao fim da coleção o que não quero, se não cria a coleçao staffs em vez de adicionar em staff
const bodyparser = require('body-parser');

require('dotenv/config'); // Pacote de encriptação da connection string 

// MIDDLEWARES -> Funções que executam quando uma certa rota é atingida
app.use(bodyparser.json());

// Importar Rotas
const StaffRoute = require('./Rotas/staff');
app.use('/staff', StaffRoute); 

// Conectar à base de dados 
mongoose.connect(process.env.DB_CONNECTION,  // Para encriptar a connection string
() => console.log('Succesfully conected!'));

// Conectar ao servidor
app.listen(3000); // Ouvir a porta 3000

// "npm install mongoose" -> pacote para conectar ao mongodb
