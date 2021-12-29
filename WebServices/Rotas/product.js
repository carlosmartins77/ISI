const express = require('express');
const { route } = require('express/lib/application');
const res = require('express/lib/response');
const router = express.Router();
const Product = require('../models/product');


// ROTAS
    //Nota: qualquer uma destas rotas é apenas o sufixo de localhost:xx/posts
    //pq o resto está definido em ProductRoute no folder app.js
  
// Retorna todos os produtos
router.get('/GetProducts', async (request, response) => { 
    try{
        const products = await Product.find();
        response.json(products);
    } catch(err)
    {
        response.json({message:err});
    }
});

// Retorna um produto com um nome especifico
router.get('/GetProducts/Name/:product_name', async(request, response) => {
    try {
        const product = await Product.find({product_name: request.params.product_name}).exec();

        response.json(product);
    } catch(err) {
        response.json({message: err});
    }
});

// Retorna um produto com um Id especifico
router.get('/GetProducts/Id/:productId', async(request, response) => {
    try {
        const product = await Product.findById(request.params.productId);

        response.json(product);
    } catch(err) {
        response.json({message: err});
    }
});

// É preciso instalar um pacote chamado body parser 
// Serve para converter os dados do request
// Cria um produto
router.post('/CreateProduct', async (request, response) => {

    const product = new Product({ // Criar um objeto para enviar
        product_name: request.body.product_name,
        brand_name: request.body.brand_name,
        category_name: request.body.category_name,
        model_year: request.body.model_year,
        list_price: request.body.list_price,
        quantity: request.body.quantity
    });
        try {
            const savedProduct = await product.save(); // Guardar na BD
            response.json(savedProduct); 
        } catch (err) {
            response.json({message: err}); 
        }
});

// Apaga um produto especifico dado um ID
router.delete('/DeleteProduct/Id/:productId', async(request, response) => {
    try {
        await Product.deleteOne({ _id: request.params.productId }); // Se existir apaga o produto com o  ID recebido
        response.json('Deleted succesfully!')

    } catch(err) {
        response.json({message: err});
    }
});

// Altera o preço de um produto com um respetivo ID
router.patch('/UpdatePrice/Id/:productId', async(request, response) => {
    try {
            const updatedPost = await Product.updateOne(
                { _id: request.params.productId },
                { $set: { list_price: request.body.list_price} } 
            ); 
        
        response.json(updatedPost);

    } catch(err) {
        response.json({message: err});
    }
});

module.exports = router;