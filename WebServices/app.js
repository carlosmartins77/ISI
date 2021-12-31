const express = require('express'); // Para usar o pacote express neste ficheiro
const app = express(); // Executar o pacote
const mongoose = require('mongoose'); // Pacote para aceder ao MongoDB
//mongoose.pluralize(null); // Sem isto, o mongoose acrescenta um s ao fim da coleção o que não quero, se não cria a coleçao produtos em vez de adicionar em produto
const bodyparser = require('body-parser');

require('dotenv/config'); // Pacote de encriptação da connection string 

// MIDDLEWARES -> Funções que executam quando uma certa rota é atingida
app.use(bodyparser.json());

// Importar Rotas
const ProductRoute = require('./Rotas/product');
app.use('/product', ProductRoute);  // Prefixo de cada um dos serviços

// Conectar à base de dados 
mongoose.connect(process.env.DB_CONNECTION,  // Para encriptar a connection string
() => console.log('Succesfully conected!'));

// Conectar ao servidor
app.listen(3000); // Liga-lo  na porta 3000

// "npm install mongoose" -> pacote para conectar ao mongodb
