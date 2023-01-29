const router = require('express').Router();
const courseRoutes = require('./thought');
const studentRoutes = require('./user');

router.use('/thought', userRoutes);
router.use('/user', userRoutes);

module.exports = router;