const express = require ("express");
const router = express.Router();
const productControllers = require ("../controllers/ProductControllers")

router.get("/list", productControllers.list);

module.exports = router;