const Products = require('../model/products');

exports.getProducts = async (req, res, next) =>{
    const products = await Products.find(); 
    res.json(products);
}

exports.postProducts = async (req, res, next) =>{
    const products = new Products(req.body);
    await products.save();
    res.json({
        status: "Product Guardado"
    });
} 