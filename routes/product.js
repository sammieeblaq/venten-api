const express = require("express");
const router = express.Router();
const upload = require("../middleware/fileUpload");

const productController = require("../controllers/product.controllers");

app.get("/", productController);

app.get("/:id", productController);

app.post("/", upload.single("Image"), productController);
module.exports = router;