const express = require('express');

const router = express.Router();
const eraController = require("../controller/eraController");

router.get('/', eraController.index);
router.get('/shop/about', eraController.about);
router.get('/shop/product', eraController.product);
router.get('/shop/service', eraController.service);
router.get('/shop/gallery', eraController.gallery);
router.get('/shop/contact', eraController.contact);

module.exports = router;