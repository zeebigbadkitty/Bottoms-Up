const router = require('express').Router();

const inventoryRoutes = require('./inventoryRoutes');
const userRoutes = require('./userRoutes');
const itemRoutes = require('./itemManagementRoutes');

router.use('/inventory', inventoryRoutes);
router.use('/users', userRoutes);
router.use('/itemManagement', itemRoutes);

module.exports = router;