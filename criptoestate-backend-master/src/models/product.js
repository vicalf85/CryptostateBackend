const {Schema, model} = require('mongoose');

const productSchema = Schema ({
    name: {
        type: String
    },
    medida: {
        type: String
    },
    precio: {
        type: Number
    }
}, {
    collection: 'products'
});

module.exports = model('Prodcut', productSchema);
