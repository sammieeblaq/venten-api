const express = require("express");
const router = express.Router();
const upload = require("../middleware/fileUpload");

const productController = require("../controllers/product.controllers");

router.get("/", productController.getProduct);

router.get("/:id", productController.getProductId);

router.post("/", upload.single("image"), productController.postProduct);
module.exports = router;