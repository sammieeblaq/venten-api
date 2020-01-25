const Product = require("../models/product.models");

exports.getProduct = (req, res) => {
    Product.find()
        .select(" Name price ")
        .exec()
        .then(docs => {
            const productResponse = {
                count: docs.length,
                products: docs.map(doc => {
                    return {
                        id: doc._id,
                        Name: doc.Name,
                        Price: doc.Price,
                        request: {
                            type: "GET",
                            url: `http://localhost:3000/product/${doc._id}`
                        }
                    }
                })
            }
            res.status(200).json({ docs: productResponse });
        }).catch(err => res.status(500).json({ err: err }));
}