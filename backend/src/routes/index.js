const express = require('express');
const router = express.Router();
const userRouter = require('./user-routes');
const projectRouter = require('./project-routes');

router.use('/users', userRouter);
router.use('/projects', projectRouter);

module.exports = router;
