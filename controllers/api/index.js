const router = require('express').Router();

const inventoryRoutes = require('./inventoryRoutes');
const userRoutes = require('./userRoutes');
const itemRoutes = require('./itemManagementRoutes');
const countRoutes = require('./countRoutes')

router.use('/inventory', inventoryRoutes);
router.use('/users', userRoutes);
router.use('/itemManagement', itemRoutes);
router.use('/count', countRoutes);

module.exports = router;