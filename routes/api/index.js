const router = require('express').Router();
const thoughtRoutes = require('./thought');
const userRoutes = require('./user');

router.use('/thought', thoughtRoutes);
router.use('/user', userRoutes);

module.exports = router;