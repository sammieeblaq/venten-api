const Product = require("../models/product.models");

exports.getProduct = (req, res) => {
    Product.find()
        .select(" name price ")
        .exec()
        .then(docs => {
            const productResponse = {
                count: docs.length,
                products: docs.map(doc => {
                    return {
                        id: doc._id,
                        Name: doc.name,
                        Price: doc.price,
                        request: {
                            type: "GET",
                            url: `http://localhost:4000/product/${doc._id}`
                        }
                    }
                })
            }
            res.status(200).json({ docs: productResponse });
        }).catch(err => res.status(500).json({ err: err }));
}

exports.postProduct = (req, res) => {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        // image: req.file.path,
        color: req.body.color
    });
    product.save()
        .then(result => {
            res.status(200).json({
                createdBook: {
                    _id: result._id,
                    Name: result.name,
                    Description: result.description,
                    Price: result.price,
                    Category: result.category,
                    Image: result.image,
                    Color: result.color,
                    request: {
                        type: "POST",
                        url: `http://localhost:4000/product/${result._id}`
                    }
                }
            })
        })
    .catch(err => res.status(500).json({ err: err }))
}

exports.getProductId = (req, res) => {
    const { id } = req.params;
    Product.findById({ _id: id })
        .select(" _id name description price category image color ")
        .exec()
        .then(product => {
            // If a book exists
            if (product) {
                res.status(200).json({
                    product: product,
                    request: {
                        type: "GET",
                        url: `http://localhost:4000/product`
                    }
                });
            } else {
                res.status(404).json({ message: "No valid Entry for ID" });
            }
        })
    .catch(err => res.status(500).json({ err: err }));
}