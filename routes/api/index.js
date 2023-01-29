const router = require('express').Router();
const courseRoutes = require('./thoughtRoutes');
const studentRoutes = require('./userRoutes');

router.use('/thought', userRoutes);
router.use('/user', userRoutes);

module.exports = router;