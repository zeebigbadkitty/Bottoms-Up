const router = require('express').Router();
const userRoutes = require('./userRoutes');
const inventoryRoutes = require('./InventoryRoute');

router.use('/users', userRoutes);
router.use('/inventory', inventoryRoutes);

module.exports = router;
