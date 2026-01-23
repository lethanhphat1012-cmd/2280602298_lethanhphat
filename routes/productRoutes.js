const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.get('/all', controller.getAllProducts);
router.get('/names-prices', controller.getNamesAndPrices);
router.get('/in-stock', controller.getInStockProducts);
router.get('/checks', controller.checkConditions);
router.get('/total-value', controller.getTotalInventoryValue);
router.get('/loops-and-filter', controller.getLoopResults);

module.exports = router;