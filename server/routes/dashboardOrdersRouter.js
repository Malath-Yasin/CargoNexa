const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const orderController = require('../controllers/dashboardOrdersController');

// CRUD operations for orders


router.get('/orders', authMiddleware.authorize([3]), orderController.getAllOrdersWithPaginationAndSearch);
router.get('/orders/:orderId', authMiddleware.authorize([3]), orderController.getOrderById);

router.put('/update-orders/:orderId', authMiddleware.authorize([3]), orderController.updateOrderById);

router.put('/delete-orders/:orderId', authMiddleware.authorize([3]), orderController.deleteOrderById);

router.get('/user/order/:orderId', authMiddleware.authorize([1]), orderController.getOrderById);

module.exports = router;
