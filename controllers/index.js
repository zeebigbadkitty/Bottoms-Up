const router = require('express').Router();

<<<<<<< HEAD

module.exports = router;
=======
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
>>>>>>> addmodels
