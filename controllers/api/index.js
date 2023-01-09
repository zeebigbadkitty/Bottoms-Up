// directs us to the routes within the api folder
const router = require('express').Router();

const inventoryRoutes = require('./inventoryRoutes');
const userRoutes = require('./userRoutes');
const itemRoutes = require('./itemManagementRoutes');
const countRoutes = require('./countRoutes');
const chartRoutes = require('./chartRoutes');

router.use('/inventory', inventoryRoutes);
router.use('/users', userRoutes);
router.use('/itemManagement', itemRoutes);
router.use('/count', countRoutes);
router.use('/chart', chartRoutes);

module.exports = router;