const express = require('express');
const router = express.Router();
const productController = require("../controllers/productControllers");
const multer = require("multer");
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/img/imagenes"))
    },
    filename: function (req, file, cb) {
        const newFileName = file.fieldname + Date.now() + '-' + path.extname(file.originalname)
        cb(null, newFileName)
    }
})

const upload = multer({ storage: storage })



router.get("/list", productController.list);
router.get("/detail/:id", productController.detail);
router.get("/create", productController.create);
router.post("/create", upload.single("imagen") ,productController.store);
router.get("/edit/:id", productController.edit);
router.put("/edit/:id", productController.update);
router.delete("/delete/:id", productController.destroy)

module.exports = router;