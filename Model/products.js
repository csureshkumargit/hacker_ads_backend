const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductsSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    webUrl: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
}, {
    collection: 'products',
    versionKey: false //here
});

module.exports = mongoose.model('products', ProductsSchema, 'products');
