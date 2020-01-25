const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
    }
})

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/jpeg" || 
        file.mimetype === "image/png" || 
        file.mimetype === "image/svg"
        ) {
        cb(null, true)
    } else 
        cb(null, false)
}

const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: fileFilter
})

module.exports = upload;
