const router = require('express').Router();

const inventoryRoutes = require('./inventoryRoutes');
const userRoutes = require('./userRoutes');

router.use("/inventory", inventoryRoutes);
router.use("/users", userRoutes);



module.exports = router;