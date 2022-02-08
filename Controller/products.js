const ProductsModel = require('../Model/products');

exports.getAllProducts = (req, res) => {
    ProductsModel.find()
        .then((products) =>
            res.status(200).json({ products: products }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}

exports.addProduct = (req, res) => {
    const { Name, webUrl, imageUrl } = req.body;
    const newProduct = new ProductsModel({
        Name,
        webUrl,
        imageUrl
    })
    newProduct.save()
        .then((Product) =>
            res.status(200).json({ addeProduct: Product }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}