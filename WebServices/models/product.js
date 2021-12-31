const mongoose = require('mongoose');

//Criar o objeto produto (Equivalente a classe no C#)
const ProductSchema = mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    brand_name: {
        type: String,
        required: true
    },
    category_name: {
        type: String,
        required: true
    },
    model_year: {
        type: Number,
        required: true
    },
    list_price: {
        type: Number,
        required: true
    },
    quantity: {
        type:Number,
        required: true
    }
});

module.exports = mongoose.model('product', ProductSchema);