const mongoose = require('mongoose');

const { Schema } = mongoose;

const productsSchema = new Schema({
    idArticle: { type : String, required: true},
    title : { type : String, required: true},
    description: { type : String, required: true},
    mark: { type : String, required: true},
    image: { type : String, required: true},
    price : { type : Number, required: true}
});

module.exports = mongoose.model('Products', productsSchema);