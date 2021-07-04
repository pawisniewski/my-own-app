const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orders.controller');

router.route('/orders').get(OrderController.getAll);
router.route('/orders/:id').get(OrderController.getById);
router.route('/orders/').post(OrderController.post);

module.exports = router;
